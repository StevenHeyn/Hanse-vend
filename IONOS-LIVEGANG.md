# HANSE VEND: IONOS Livegang

## Vor dem Umschalten

- `npm install` und `npm run build` lokal oder in einer CI-Umgebung ausführen. Nur den **Inhalt** von `dist/` hochladen, nicht den Quellcode.
- Die bislang externen Bilder unter `raw.githubusercontent.com` in lokale Dateien übernehmen und die Referenzen in `src/App.tsx` umstellen.
- Datenschutzerklärung juristisch prüfen: IONOS-Vertrag/AVV, Web3Forms-Datenverarbeitung, Drittlandtransfers, Aufbewahrung und extern geladene Bilder.
- Produktionsversion auf Mobilgerät und Desktop testen, alle Bilder/Links prüfen.

## IONOS

1. Im bestehenden Hostingvertrag einen **separaten Zielordner** für HANSE VEND anlegen. Ordner von dein-snackautomat.de nicht verändern.
2. Den Inhalt des erzeugten `dist/`-Ordners per SFTP oder IONOS-Dateimanager in den neuen Ordner hochladen.
3. In IONOS die Domain `hanse-vend.de` diesem Verzeichnis zuweisen. DNS-/Mail-Einstellungen (insbesondere MX, SPF, DKIM, DMARC) nicht unbeabsichtigt verändern.
4. HTTPS aktivieren bzw. Zertifikat prüfen, außerdem `www.hanse-vend.de` und Weiterleitungen testen.
5. Kontaktformular mit echter Anfrage prüfen, Impressum/Datenschutz öffnen, Mobilansicht kontrollieren.
6. Externen bisherigen Hoster **erst nach erfolgreichem Live-Test und Sicherung** kündigen. Kündigungsfristen prüfen.

## Technische Hinweise

- Vite ist statisch gebaut; die bestehende Navigation nutzt Anker und separate `.html`-Seiten, daher ist normalerweise keine SPA-Rewrite-Regel erforderlich.
- Web3Forms Access Key ist im Client-Code als Fallback enthalten; kein zusätzlicher IONOS-Serverdienst erforderlich.
- GitHub-Änderungen werden **nicht automatisch** bei IONOS veröffentlicht. Bei jeder Änderung erneut bauen und hochladen.

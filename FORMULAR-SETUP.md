# HANSE VEND – Web3Forms aktivieren

1. Auf https://web3forms.com/ für **info@hanse-vend.de** einen neuen Access Key anfordern.
2. Den Bestätigungslink aus dem Postfach anklicken.
3. In Vercel unter **Project → Settings → Environment Variables** `VITE_WEB3FORMS_ACCESS_KEY` mit dem neuen Schlüssel hinterlegen (Production, Preview).
4. **Redeploy** auslösen, damit Vite den Schlüssel beim Build einbindet.
5. Über die Vorschau eine Testanfrage senden und den Eingang in info@hanse-vend.de prüfen.

Der bisherige Web3Forms-Schlüssel von dein-snackautomat.de wird nicht verwendet. Web3Forms-Access-Keys sind im Browser sichtbar und keine vertraulichen Server-Secrets; die Anbieter- und Domain-Einstellungen müssen gegen Missbrauch geprüft werden.

Ohne konfigurierte Variable wird kein Versand ausgelöst und die Website zeigt eine verständliche Fehlermeldung mit der Kontaktadresse.

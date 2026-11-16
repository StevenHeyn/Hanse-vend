# HANSE VEND: Kontaktformular und Abnahmetest

Das Formular in `src/App.tsx` verwendet Web3Forms. Der vorhandene, für HANSE VEND erstellte Access Key ist im Client-Code eingebunden. Der Schlüssel ist ein öffentlicher Client-Key, kein Server-Secret. Eine Vercel-Umgebungsvariable ist für den aktuellen Stand **nicht erforderlich**.

## Vor dem Livegang
1. Im Web3Forms-Konto prüfen, dass der Schlüssel dem Empfänger `info@hanse-vend.de` zugeordnet ist und die Domain `hanse-vend.de` zulässig ist.
2. Datenschutzhinweise, Anbieterunterlagen und die datenschutzrechtliche Grundlage für den Einsatz von Web3Forms rechtlich prüfen.
3. Auf der endgültigen HTTPS-Domain eine Anfrage mit realer Test-E-Mail-Adresse absenden. Die Website muss die Annahme durch den Dienst anzeigen.
4. Den tatsächlichen **Posteingang** unter `info@hanse-vend.de` prüfen, auch Spam. Nur die Erfolgsmeldung des Formularservices ist kein Zustellnachweis.
5. Testfälle: ungültige E-Mail, leere Pflichtfelder, Netzwerkfehler, Smartphone und Tastaturbedienung.
6. Falls der Anbieter die Anfrage ablehnt, wird die Fehlermeldung angezeigt und die direkte E-Mail-Adresse bleibt erreichbar.

## Technische Details
POST an `https://api.web3forms.com/submit` mit `access_key`, `email`, `replyto`, Betreff, Standortdaten und Nachricht. Kein eigener PHP- oder Node-Server auf IONOS notwendig.

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';

const email = 'info@hanse-vend.de';
const mealSolution = 'Essensautomaten / Betriebsverpflegung';
const solutions = ['Snack- und Getränkeautomaten', 'Snackautomat', 'Getränkeautomat', 'Kaffeeautomat', mealSolution, 'Individuelles Projekt'];

export default function Inquiry() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const initialSolution = new URLSearchParams(window.location.search).get('loesung') === 'betriebsverpflegung' ? mealSolution : solutions[0];

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    if (fields.botcheck) return;
    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...fields,
          access_key: 'a5701fed-80b4-464b-9dfd-44de81c9359e',
          subject: 'Neue HANSE VEND Standortanfrage – ' + fields.region,
          from_name: 'HANSE VEND Website',
          replyto: fields.email,
        }),
      });
      if (!response.ok || !(await response.json()).success) throw new Error('submit');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return <section className="section inquiry" id="anfrage">
    <div className="shell split">
      <div>
        <p className="eyebrow">Kostenloser Standort-Check</p>
        <h2>Was braucht<br/>Ihr Standort?</h2>
        <p className="intro">Nennen Sie uns Ihren Standort und die gewünschte Versorgung. Wir melden uns mit einer unverbindlichen Einschätzung.</p>
        <address>
          <a href={'mailto:' + email}><Mail aria-hidden="true"/>{email}</a>
          <a href="tel:+4941016012870"><Phone aria-hidden="true"/>04101 / 6012870</a>
        </address>
      </div>
      <form className="inquiry-form" onSubmit={submit}>
        <p className="form-hint">Felder mit * sind erforderlich.</p>
        <input name="botcheck" type="text" hidden tabIndex={-1} autoComplete="off" aria-hidden="true"/>
        <div className="form-row">
          <label>PLZ oder Ort *<input name="region" autoComplete="off" placeholder="z. B. 20095 Hamburg" required/></label>
          <label>Standortart<select name="type" defaultValue="Unternehmen / Büro">
            {['Unternehmen / Büro','Logistik / Industrie','Fitness / Freizeit','Hotel / Gastronomie','Sonstiges'].map(type => <option key={type}>{type}</option>)}
          </select></label>
        </div>
        <div className="form-row">
          <label>Gewünschte Lösung<select name="solution" defaultValue={initialSolution}>{solutions.map(item => <option key={item}>{item}</option>)}</select></label>
          <label>Nutzer pro Tag<select name="people" defaultValue=""><option value="">Bitte auswählen</option>{['Unter 30','30–100','100–250','Über 250'].map(item => <option key={item}>{item}</option>)}</select></label>
        </div>
        <div className="form-row">
          <label>Ihr Name *<input name="name" autoComplete="name" required/></label>
          <label>E-Mail-Adresse *<input name="email" type="email" autoComplete="email" spellCheck={false} required/></label>
        </div>
        <details className="optional-fields"><summary>Firma, Telefon oder Nachricht ergänzen</summary>
          <div className="form-row">
            <label>Unternehmen<input name="company" autoComplete="organization"/></label>
            <label>Telefonnummer<input name="phone" type="tel" autoComplete="tel"/></label>
          </div>
          <label>Ihre Nachricht<textarea name="message" rows={3}/></label>
        </details>
        <p className="form-hint">Wir bearbeiten Ihre Anfrage über Web3Forms. Einzelheiten finden Sie in unserer <a href="/datenschutz.html">Datenschutzerklärung</a>.</p>
        <button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Anfrage wird gesendet …' : 'Standortanfrage senden'} <ArrowUpRight aria-hidden="true"/></button>
        <div role="status" className="feedback">{status === 'sent' && 'Vielen Dank für Ihre Anfrage. Wir melden uns bei Ihnen.'}</div>
        {status === 'error' && <p role="alert">Der Versand ist fehlgeschlagen. Versuchen Sie es erneut oder schreiben Sie an <a href={'mailto:' + email}>{email}</a>.</p>}
      </form>
    </div>
  </section>;
}

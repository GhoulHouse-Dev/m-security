"use client";
import { useState, type FormEvent } from "react";
export default function InquiryForm() {
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "");
    const subject = `Tarjouspyyntö: ${value("service")} — ${value("company")}`;
    const body = `Hei Tuomas,\n\nHaluaisin keskustella palvelusta: ${value("service")}.\n\nYritys / tapahtuma: ${value("company")}\nYhteyshenkilö: ${value("name")}\nSähköposti: ${value("email")}\nPuhelin: ${value("phone") || "Ei annettu"}\n\nKohde, ajankohta ja lisätiedot:\n${value("message")}\n\nYstävällisin terveisin,\n${value("name")}`;
    window.location.href = `mailto:tuomas.toivonen@mikia.fi?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Viesti on valmisteltu sähköpostiohjelmaasi. Jos ohjelma ei avautunut, lähetä tiedot osoitteeseen tuomas.toivonen@mikia.fi.",
    );
  }
  return (
    <form className="inquiry" onSubmit={submit}>
      <div className="field full">
        <label htmlFor="service">Palvelu</label>
        <select id="service" name="service">
          <option>Ravintolaturvallisuus</option>
          <option>Tapahtumaturvallisuus</option>
          <option>Turvallisuussuunnittelu</option>
          <option>Muu yhteydenotto</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="name">Nimi</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="company">Yritys tai tapahtuma</label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="email">Sähköposti</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Puhelin</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field full">
        <label htmlFor="message">Kohde, ajankohta ja lisätiedot</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button className="button" type="submit">
        Avaa tarjouspyyntö sähköpostiin
      </button>
      <p className="form-note">
        Painike avaa valmiin viestin sähköpostiohjelmaasi. Tarkista viesti ja
        lähetä se Tuomakselle.
      </p>
      <p className="form-note" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}

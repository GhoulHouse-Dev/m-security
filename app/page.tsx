import Image from "next/image";
import Header from "@/components/Header";
import InquiryForm from "@/components/InquiryForm";
import ServiceLink from "@/components/ServiceLink";
export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Siirry sisältöön
      </a>
      <Header />
      <main id="main">
        <section className="hero">
          <div className="wrap">
            <div className="hero-inner">
              <div className="hero-copy">
                <div className="eyebrow">
                  Ravintola- ja tapahtumaturvallisuus
                </div>
                <h1>
                  Turvallinen ilta.
                  <br />
                  <span>Hyvä kokemus.</span>
                </h1>
                <p>
                  Järjestyksenvalvonta ja turvallisuussuunnittelu, jotka antavat
                  sinulle tilaa keskittyä asiakkaisiisi.
                </p>
                <div className="hero-actions">
                  <a className="button" href="#yhteys">
                    Kerro tarpeestasi
                  </a>
                  <a className="button outline" href="tel:+358409005791">
                    040 900 5791
                  </a>
                </div>
              </div>
              <div className="hero-art" aria-hidden="true">
                <Image
                  className="hero-symbol"
                  src="/assets/logo-symbol.png"
                  alt=""
                  width={370}
                  height={330}
                />
                <div className="hero-art-label">
                  M-Security Suomi
                  <br />
                  Helsinki
                </div>
              </div>
            </div>
            <div className="service-strip">
              <a href="#ravintolat">
                <span>01</span> Ravintolaturvallisuus
              </a>
              <a href="#tapahtumat">
                <span>02</span> Tapahtumaturvallisuus
              </a>
              <a href="#toimintatapa">
                <span>03</span> Turvallisuussuunnittelu
              </a>
            </div>
          </div>
        </section>
        <section className="section paper" id="palvelut">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Palvelut</div>
                <h2>
                  Turvallisuus osaksi
                  <br />
                  onnistunutta iltaa.
                </h2>
              </div>
              <p>
                Ravintolan arki ja yksittäinen tapahtuma tarvitsevat erilaisen
                toteutuksen. Palvelun laajuus suunnitellaan kohteen,
                asiakasmäärän ja toimintaympäristön mukaan.
              </p>
            </div>
            <div className="services">
              <article className="service" id="ravintolat">
                <div className="service-number">01</div>
                <h3>Ravintolaturvallisuus</h3>
                <p>
                  Järjestyksenvalvonta on osa ravintolan asiakaskokemusta.
                  Tavoitteena on turvallinen ja viihtyisä ympäristö sekä sujuva
                  ilta henkilökunnalle.
                </p>
                <ul>
                  <li>Järjestyksenvalvonta</li>
                  <li>Eteispalvelut</li>
                  <li>Turvallisuus- ja pelastussuunnittelu</li>
                  <li>Järjestyksenvalvonta- ja omavalvontasuunnitelmat</li>
                </ul>
                <ServiceLink service="Ravintolaturvallisuus">
                  Keskustellaan ravintolastasi
                </ServiceLink>
              </article>
              <article className="service" id="tapahtumat">
                <div className="service-number">02</div>
                <h3>Tapahtumaturvallisuus</h3>
                <p>
                  Turvallisuus suunnitellaan ennen tapahtumaa.
                  Järjestyksenvalvonta ja turvallisuusjohto tukevat tapahtuman
                  sujuvaa toteutusta.
                </p>
                <ul>
                  <li>Järjestyksenvalvonta</li>
                  <li>Eteispalvelut</li>
                  <li>Turvallisuus- ja pelastussuunnitelmat</li>
                  <li>Tapahtuman turvallisuusjohto</li>
                </ul>
                <ServiceLink service="Tapahtumaturvallisuus">
                  Kerro tapahtumastasi
                </ServiceLink>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="toimintatapa">
          <div className="wrap approach">
            <div className="approach-copy">
              <div className="eyebrow">Toimintatapa</div>
              <h2>
                Selkeä suunnitelma.
                <br />
                Hallittu toteutus.
              </h2>
              <p>
                Yhteistyö alkaa kohteesta ja sen tarpeista. Tavoitteena on
                kokonaisuus, jossa vastuut, henkilöstö ja käytännön
                toimintatavat ovat selvät.
              </p>
            </div>
            <div className="steps">
              <article className="step">
                <span className="step-num">01</span>
                <div>
                  <h3>Käydään tarve läpi</h3>
                  <p>
                    Kohde, ajankohta, asiakasmäärä ja tarvittavat palvelut
                    muodostavat lähtökohdan.
                  </p>
                </div>
              </article>
              <article className="step">
                <span className="step-num">02</span>
                <div>
                  <h3>Sovitaan kokonaisuus</h3>
                  <p>
                    Palvelun sisältö, vastuut ja käytännön järjestelyt
                    täsmennetään ennen toteutusta.
                  </p>
                </div>
              </article>
              <article className="step">
                <span className="step-num">03</span>
                <div>
                  <h3>Huolehditaan toteutuksesta</h3>
                  <p>
                    Järjestyksenvalvonta ja turvallisuusjohto tukevat
                    asiakkaiden ja henkilökunnan sujuvaa iltaa.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="section paper" id="yritys">
          <div className="wrap company-grid">
            <div>
              <div className="eyebrow">M-Security Suomi Oy</div>
              <h2>
                Turvallisuutta
                <br />
                ihmisiä varten.
              </h2>
              <p>
                Ravintolan tai tapahtuman turvallisuus näkyy asiakkaille ennen
                kaikkea hyvänä kokemuksena. M-Security Suomen palvelut kattavat
                järjestyksenvalvonnan, eteispalvelut ja
                turvallisuussuunnittelun.
              </p>
              <div className="company-facts">
                <div className="fact">
                  <span>Yhtiö</span>
                  <strong>M-Security Suomi Oy</strong>
                </div>
                <div className="fact">
                  <span>Y-tunnus</span>
                  <strong>0629094-2</strong>
                </div>
                <div className="fact">
                  <span>Kotipaikka</span>
                  <strong>Helsinki</strong>
                </div>
              </div>
            </div>
            <aside className="contact-card">
              <div className="eyebrow">Yhteyshenkilö</div>
              <h3>Tuomas Toivonen</h3>
              <p>Ravintola- ja tapahtumaturvallisuus</p>
              <a href="tel:+358409005791">040 900 5791</a>
              <a href="mailto:tuomas.toivonen@mikia.fi">
                tuomas.toivonen@mikia.fi
              </a>
            </aside>
          </div>
        </section>
        <section className="contact" id="yhteys">
          <div className="wrap contact-grid">
            <div className="contact-intro">
              <div className="eyebrow">Ota yhteyttä</div>
              <h2>
                Mitä iltasi
                <br />
                tarvitsee?
              </h2>
              <p>
                Kerro ravintolasta tai tapahtumasta, ajankohdasta ja
                tarvitsemastasi palvelusta. Käydään sopiva toteutus läpi.
              </p>
              <a className="phone" href="tel:+358409005791">
                040 900 5791
              </a>
            </div>
            <InquiryForm />
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrap footer-inner">
          <div>
            M-Security Suomi Oy · 0629094-2
            <br />
            Aleksis Kiven katu 22 A 4, 00500 Helsinki
          </div>
          <div className="footer-links">
            <a href="tel:+358409005791">040 900 5791</a>
            <a href="/brand">Brändiohje</a>
          </div>
        </div>
      </footer>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import PrintButton from "@/components/PrintButton";
export const metadata: Metadata = { title: "Brändiohje v1" };
export default function Brand() {
  return (
    <>
      <header className="header">
        <div className="wrap header-inner">
          <a className="brand" href="/">
            <Image
              className="brand-primary"
              src="/assets/logo-primary.png"
              alt="M-Security Suomi"
              width={226}
              height={61}
            />
          </a>
          <a className="text-link" href="/">
            Verkkosivukonsepti
          </a>
        </div>
      </header>
      <main>
        <section className="guide-hero">
          <div className="wrap">
            <div className="eyebrow">Brändi-identiteetti · v1 · 03.10.2026</div>
            <h1>
              Turvallisuutta
              <br />
              ihmisiä varten.
            </h1>
            <p>
              M-Security Suomen brändi yhdistää hallitun turvallisuuden, hyvän
              asiakaskokemuksen ja selkeän yhteistyön. Tämä on ensimmäinen
              konsepti Tuomaksen arvioitavaksi.
            </p>
            <div className="download-row">
              <a
                className="button"
                href="/assets/M-Security_Suomi_Brandiohje_v1.pdf"
                download
              >
                Lataa brändiohje PDF
              </a>
              <PrintButton />
            </div>
          </div>
        </section>
        <div className="wrap guide-main">
          <section className="guide-section">
            <h2>01 / Brändin perusta</h2>
            <div className="guide-grid">
              <div>
                <h3>Asema</h3>
                <p>
                  Ravintoloiden ja tapahtumien turvallisuuskumppani, joka tukee
                  asiakkaan omaa liiketoimintaa ja vieraiden hyvää kokemusta.
                </p>
                <h3>Lupaus</h3>
                <p>Turvallinen ilta. Hyvä kokemus.</p>
                <h3>Ydinajatus</h3>
                <p>
                  Turvallisuus näkyy rauhallisena, asiallisena ja
                  johdonmukaisena toimintana.
                </p>
              </div>
              <div>
                <h3>Kohderyhmät</h3>
                <ul className="guide-list">
                  <li>
                    Ravintoloitsijat sekä pubien ja yökerhojen vastuuhenkilöt.
                  </li>
                  <li>
                    Konserttien, yleisötapahtumien ja yksityistilaisuuksien
                    järjestäjät.
                  </li>
                  <li>
                    Turvallisuuspalvelujen hankinnasta vastaavat yritysten
                    päättäjät.
                  </li>
                </ul>
                <h3>Persoonallisuus</h3>
                <p>Rauhallinen. Täsmällinen. Lähestyttävä. Vastuullinen.</p>
              </div>
            </div>
          </section>
          <section className="guide-section">
            <h2>02 / Logo ja tunnus</h2>
            <div className="logo-stage">
              <Image
                src="/assets/logo-primary.png"
                alt="M-Security Suomen päälogo"
                width={600}
                height={190}
              />
            </div>
            <p>
              M-tunnus rakentuu kulmikkaista, toisiinsa liittyvistä rakenteista.
              Se viestii hallinnasta ja jatkuvuudesta. Sanamerkki on vahva ja
              selkeä; SUOMI täydentää sitä rauhallisena toisena rivinä.
            </p>
            <div className="guide-grid">
              <div>
                <h3>Käyttö</h3>
                <ul className="guide-list">
                  <li>Päälogo valkoisella tai hyvin vaalealla pinnalla.</li>
                  <li>Sininen M-tunnus tummalla tai vaalealla pinnalla.</li>
                  <li>Suoja-alue vähintään neljäsosa tunnuksen korkeudesta.</li>
                  <li>
                    Päälogon suositeltu minimileveys verkossa 180 px; tunnuksen
                    32 px.
                  </li>
                </ul>
              </div>
              <div>
                <h3>Rajoitukset</h3>
                <ul className="guide-list">
                  <li>Säilytä mittasuhteet ja alkuperäinen sommittelu.</li>
                  <li>Älä lisää varjoja, ääriviivoja tai uusia värisävyjä.</li>
                  <li>
                    Älä sijoita päälogoa tummalle tai levottomalle taustalle.
                  </li>
                  <li>
                    PNG-konsepti viimeistellään vektoriksi ennen painotuotantoa.
                  </li>
                </ul>
              </div>
            </div>
            <div className="download-row">
              <a
                className="button"
                href="/assets/logo-primary.png"
                download="M-Security_Suomi_Paalogo.png"
              >
                Lataa päälogo PNG
              </a>
              <a
                className="button"
                href="/assets/logo-symbol.png"
                download="M-Security_Suomi_Tunnus.png"
              >
                Lataa M-tunnus PNG
              </a>
            </div>
          </section>
          <section className="guide-section">
            <h2>03 / Värit</h2>
            <div className="palette">
              <div className="swatch">
                <div
                  className="swatch-color"
                  style={{ background: "#101e35" }}
                ></div>
                <div className="swatch-label">
                  <strong>Tumma sininen</strong>
                  <br />
                  #101E35
                  <br />
                  Perusta, otsikot, tummat pinnat
                </div>
              </div>
              <div className="swatch">
                <div
                  className="swatch-color"
                  style={{ background: "#4263eb" }}
                ></div>
                <div className="swatch-label">
                  <strong>Kirkas sininen</strong>
                  <br />
                  #4263EB
                  <br />
                  Tunnus, toimintopainikkeet
                </div>
              </div>
              <div className="swatch">
                <div
                  className="swatch-color"
                  style={{ background: "#f4f6f9" }}
                ></div>
                <div className="swatch-label">
                  <strong>Vaalea harmaa</strong>
                  <br />
                  #F4F6F9
                  <br />
                  Taustat ja osioiden rytmi
                </div>
              </div>
              <div className="swatch">
                <div
                  className="swatch-color"
                  style={{ background: "#fff" }}
                ></div>
                <div className="swatch-label">
                  <strong>Valkoinen</strong>
                  <br />
                  #FFFFFF
                  <br />
                  Tila, luettavuus, kontrasti
                </div>
              </div>
            </div>
            <p>
              Tumma sininen ja valkoinen muodostavat pääosan ilmeestä. Kirkasta
              sinistä käytetään harkitusti. Leipätekstin harmaa on #586576;
              tummien pintojen teksti #C2CBDB. Kontrastin lähtökohta on WCAG AA
              -tasoa vastaava tekstin luettavuus.
            </p>
          </section>
          <section className="guide-section">
            <h2>04 / Typografia</h2>
            <div className="guide-grid">
              <div>
                <h3>Barlow Condensed 600–800</h3>
                <p className="type-example">
                  Turvallinen ilta.
                  <br />
                  Hyvä kokemus.
                </p>
                <p>
                  Otsikot, suuret palvelunumerot ja lyhyet nostot. Tiivis
                  rakenne antaa ilmeelle ryhtiä.
                </p>
              </div>
              <div>
                <h3>Inter 400–700</h3>
                <p>
                  Selkeä suunnitelma auttaa pitämään vastuut ja käytännön
                  järjestelyt hallinnassa.
                </p>
                <p>
                  Leipäteksti 16–18 px / riviväli 1,65–1,8. Käyttöliittymän
                  teksti vähintään 14 px. H1 tietokoneella noin 96–108 px,
                  puhelimella 56–80 px. Pitkiä tekstejä ei ladota kokonaan
                  suuraakkosin.
                </p>
              </div>
            </div>
          </section>
          <section className="guide-section">
            <h2>05 / Viestintä ja kuvamaailma</h2>
            <div className="guide-grid">
              <div>
                <h3>Kirjoita näin</h3>
                <p>
                  ”Kerro kohteesta ja ajankohdasta. Käydään tarvittava palvelu
                  läpi.”
                </p>
                <p>
                  ”Järjestyksenvalvonta on osa ravintolan asiakaskokemusta.”
                </p>
                <p>”Turvallisuus suunnitellaan ennen tapahtumaa.”</p>
                <h3>Vältä</h3>
                <p>
                  Todentamattomia ylivoimaväitteitä, pelottelua, sotilaallista
                  sanastoa ja luvattuja vasteaikoja ilman sovittua palvelutasoa.
                </p>
              </div>
              <div>
                <h3>Kuvaa toimintaa</h3>
                <p>
                  Rauhallinen sisäänkäynti, asiallinen asiakaskohtaaminen,
                  henkilöstön yhteistyö ja huolellinen valmistelu. Käytä oikeita
                  henkilöitä ja kohteita luvalla.
                </p>
                <h3>Käsittely</h3>
                <p>
                  Luonnolliset ihonsävyt, viileä ja neutraali yleissävy,
                  maltillinen kontrasti. Ei aggressiivisia tilannekuvia tai
                  asiakkaiden turvallisuusjärjestelyjä paljastavia
                  yksityiskohtia.
                </p>
              </div>
            </div>
          </section>
          <section className="guide-section">
            <h2>06 / Verkkosivujen järjestelmä</h2>
            <p>
              Etusivu etenee palvelulupauksesta kahteen palvelukokonaisuuteen,
              toimintatapaan, yritykseen ja yhteydenottoon. Yksi ensisijainen
              toiminto: kerro tarpeestasi.
            </p>
            <ul className="guide-list">
              <li>
                Enimmäisleveys 1320 px. Sivumarginaali tietokoneella 56 px ja
                puhelimella 18–22 px.
              </li>
              <li>Osioiden väli 96 px tietokoneella ja 64 px puhelimella.</li>
              <li>
                Vähintään 50 px korkeat toimintopainikkeet. Kulman pyöristys 3
                px.
              </li>
              <li>
                Rauhalliset reunaviivat; kortteihin ei lisätä koristeellisia
                varjoja.
              </li>
              <li>
                Puhelimella palstat pinoutuvat ja navigaatio avautuu
                Valikko-painikkeesta.
              </li>
            </ul>
          </section>
          <section className="guide-section">
            <h2>07 / Sovellukset ja viimeistely</h2>
            <div className="guide-grid">
              <div>
                <h3>Sähköpostiallekirjoitus</h3>
                <p>
                  <strong>Tuomas Toivonen</strong>
                  <br />
                  M-Security Suomi Oy
                  <br />
                  040 900 5791
                  <br />
                  tuomas.toivonen@mikia.fi
                </p>
                <h3>Somejulkaisun rakenne</h3>
                <p>
                  Yksi havainto → asiakkaalle näkyvä hyöty → yksi
                  toimintakehote. Esimerkiksi ”Turvallinen ilta alkaa ennen
                  ensimmäistä asiakasta. Järjestelyt ja vastuut käydään läpi
                  ennakkoon. Keskustellaan ravintolasi tarpeista.”
                </p>
              </div>
              <div>
                <h3>Ennen varsinaista käyttöönottoa</h3>
                <ul className="guide-list">
                  <li>Tuomas hyväksyy nimen, ilmeen ja palvelutekstit.</li>
                  <li>
                    Selvitetään Mikia-brändin suhde yhtiöön ja uuden domainin
                    valinta.
                  </li>
                  <li>
                    Päälogo viimeistellään SVG/PDF-muotoon ja valmistetaan
                    yksiväriset versiot.
                  </li>
                  <li>Lisätään hyväksytyt henkilöstökuvat ja referenssit.</li>
                  <li>
                    Valitaan tarjouspyynnön vastaanotto ja testataan toimitus.
                  </li>
                  <li>
                    Vahvistetaan toimialue ja eSelko-järjestelmän nykyinen
                    käyttö.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <div className="wrap footer-inner">
          <div>M-Security Suomi · Brändikonsepti v1 · GhoulHouse</div>
          <a href="/">Avaa verkkosivukonsepti</a>
        </div>
      </footer>
    </>
  );
}

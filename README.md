# M-Security Suomi — Next.js

M-Security Suomi Oy:n verkkosivu- ja brändikonsepti. Next.js App Router, React ja TypeScript. Etusivu on reitissä `/` ja brändiohje reitissä `/brand`.

## Paikallinen käyttö

Node.js 20.9 tai uudempi; tarkistusympäristössä Node.js 24.

```bash
npm ci
npm run dev
```

Tuotantoversion tarkistus:

```bash
npm run build
npm start
```

## Vercel-julkaisu

Projekti käyttää Vercelin Next.js-asetusta. Build on `npm run build`, asennus `npm ci`. Ympäristömuuttujia ei tarvita.

Kirjaudu omaan Vercel-tiliisi ja julkaise tästä hakemistosta:

```bash
npx vercel login
npx vercel --prod --scope info-32533854s-projects
```

Valitse uusi projekti nimeltä `m-security-suomi`. Säilytä Next.js-oletukset. Vercel palauttaa julkaisun URL-osoitteen onnistuneen buildin jälkeen. GitHub-repositorio: https://github.com/GhoulHouse-Dev/m-security. Vercelissä voit myös tuoda tämän repon uutena Next.js-projektina. Vercel-julkaisua ei ole vielä vahvistettu.

## Sisältö ja toiminnot

- Ulkoasu: laivastonsininen, koboltinsininen, Inter ja Barlow Condensed. Fontit toimitetaan Next.js:n fonttitoiminnon kautta.
- Etusivu: palvelut, toimintatapa, yritys ja yhteydenotto.
- Tarjouspyyntö avaa sähköpostiohjelmaan valmiin viestin osoitteeseen `tuomas.toivonen@mikia.fi`. Lomake ei lähetä tietoja palvelimelle.
- Vanha `/brand.html` ohjataan reittiin `/brand`; `/index.html` ohjataan etusivulle.
- Logot ja brändiohjeen PDF ovat hakemistossa `public/assets`.
- Sivut käyttävät `noindex, nofollow` -asetusta, koska kyseessä on hyväksyttävä konsepti. Poista asetus sekä `app/layout.tsx`- että `next.config.ts`-tiedostoista vasta, kun yrityksen tiedot ja lopullinen julkaisu on hyväksytty.

## Ennen yrityksen virallista käyttöönottoa

Vahvista Tuomaksen kanssa palvelut, yhteystiedot, toimialue ja Mikia-brändin suhde M-Security Suomeen. Viimeistele rasterimuotoisen logoluonnoksen vektoriversio painotuotteita varten. Nykyistä mikia.fi-sivustoa tai verkkotunnusta ei ole muutettu.

## Tarkistukset

Vahvistettu paikallisesti: `npm run build` ja sen TypeScript-tarkistus sekä tuotantopalvelimen etusivu, brändiohje, PDF, logo, vanhojen reittien uudelleenohjaukset ja `noindex`-otsakkeet. Kaikki sivut ja tiedostot vastasivat HTTP 200 -tilalla uudelleenohjausten jälkeen.

Selainautomaatio ei käynnistynyt tässä ympäristössä, joten mobiilivalikon ja lomakkeen käyttöä ei ole tämän Next.js-version osalta vahvistettu selaimessa. Tarkista lisäksi mobiilivalikko, palvelun valinta, lomakkeen pakolliset kentät ja sähköpostiohjelman avaaminen julkaisun jälkeen.

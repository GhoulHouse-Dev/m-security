"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label="M-Security Suomi etusivu">
          <Image
            className="brand-primary"
            src="/assets/logo-primary.png"
            alt="M-Security Suomi"
            width={226}
            height={61}
            priority
          />
        </Link>
        <button
          className="menu-toggle"
          aria-controls="nav"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          Valikko
        </button>
        <nav
          className={`nav${open ? " open" : ""}`}
          id="nav"
          aria-label="Päänavigaatio"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          <Link href="/#palvelut" onClick={() => setOpen(false)}>
            Palvelut
          </Link>
          <Link href="/#toimintatapa" onClick={() => setOpen(false)}>
            Toimintatapa
          </Link>
          <Link href="/#yritys" onClick={() => setOpen(false)}>
            Yritys
          </Link>
          <Link
            className="button"
            href="/#yhteys"
            onClick={() => setOpen(false)}
          >
            Pyydä tarjous
          </Link>
        </nav>
      </div>
    </header>
  );
}

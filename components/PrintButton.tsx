"use client";
export default function PrintButton() {
  return (
    <button className="button print-button" onClick={() => window.print()}>
      Tulosta tämä sivu
    </button>
  );
}

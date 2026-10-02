"use client";
export default function ServiceLink({
  service,
  children,
}: {
  service: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="text-link"
      href="#yhteys"
      onClick={() => {
        const select = document.getElementById("service");
        if (select instanceof HTMLSelectElement) select.value = service;
      }}
    >
      {children}
    </a>
  );
}

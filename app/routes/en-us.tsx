import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "United States" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Link to="/en-us">
          <h1>Logo</h1>
        </Link>
        <Link to="application-modernisation">Application modernisation</Link>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/en-ca">Visit Canadian Site</Link>
        </div>
      </div>
      <Outlet />
      <div style={{ textAlign: "center" }}>
        <h1>Footer</h1>
        <p>California, USA</p>
      </div>
    </div>
  );
}

import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Canada" },
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
        <Link to="/en-ca">
          <h1>Logo</h1>
        </Link>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/en-us">Visit United States</Link>
        </div>
      </div>
      <Outlet />

      <div style={{ textAlign: "center" }}>
        <h1>Footer</h1>
        <p>Windsor, Ontario</p>
      </div>
    </div>
  );
}

import { useParams } from "@remix-run/react";

export default function Service() {
  const { id } = useParams();
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "yellow",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-[64px] text-black">
        Welcome to our sub page name {id}
      </h1>
    </div>
  );
}

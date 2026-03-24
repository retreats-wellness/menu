"use client";

import { useRef, useMemo } from "react";
import dynamic from "next/dynamic";

const ForceGraph2D = dynamic(
  () => import("react-force-graph-2d"),
  { ssr: false }
);

export default function Page() {
  const graphRef = useRef<any>(null);

  const data = useMemo(() => ({
    nodes: [
      { id: "ORIGIN", group: "core" },
      { id: "Home", group: "nav" },
      { id: "About", group: "nav" },
      { id: "Projects", group: "nav" },
      { id: "Knowledge", group: "nav" },
      { id: "Engage", group: "nav" }
    ],
    links: [
      { source: "ORIGIN", target: "Home" },
      { source: "ORIGIN", target: "About" },
      { source: "ORIGIN", target: "Projects" },
      { source: "ORIGIN", target: "Knowledge" },
      { source: "ORIGIN", target: "Engage" }
    ]
  }), []);

  return (
    <div style={{ width: "100%", height: "100vh", background: "#fff" }}>
      <ForceGraph2D
        ref={graphRef}
        graphData={data}
        nodeLabel="id"
        linkColor={() => "#E5E7EB"}
      />
    </div>
  );
}

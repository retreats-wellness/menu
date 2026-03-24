"use client";

import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";

const ForceGraph2D = dynamic(
  () => import("react-force-graph-2d"),
  { ssr: false }
);

export default function Page() {
  const graphRef = useRef<any>(null);

  const data = useMemo(() => ({
    nodes: [
      { id: "A" },
      { id: "B" }
    ],
    links: [
      { source: "A", target: "B" }
    ]
  }), []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ForceGraph2D
        ref={graphRef}
        graphData={data}
      />
    </div>
  );
}

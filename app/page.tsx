"use client";

import React, { useMemo, useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";

type NodeType = {
  id: string;
  group: string;
};

type LinkType = {
  source: string;
  target: string;
};

export default function OriginKnowledgeGraph() {
  const graphRef = useRef<any>(null);

  const data = useMemo<{ nodes: NodeType[]; links: LinkType[] }>(() => {
    return {
      nodes: [
        { id: "ORIGIN", group: "core" },

        { id: "Home", group: "nav" },
        { id: "About", group: "nav" },
        { id: "Projects", group: "nav" },
        { id: "Knowledge", group: "nav" },
        { id: "Engage", group: "nav" },
        { id: "Contact", group: "nav" },

        { id: "Vision", group: "about" },
        { id: "Founders", group: "about" },
        { id: "Advisors", group: "about" },
        { id: "Indigenous Elders", group: "about" },
        { id: "Partners", group: "about" },

        { id: "Dr. Zach Bush", group: "people" },
        { id: "Chris Deckker", group: "people" },
        { id: "Peter Young", group: "people" },
        { id: "Rebecca Irby", group: "people" },

        { id: "Ailton Krenak", group: "elders" },
        { id: "Thandiwe", group: "elders" },
        { id: "Nozipho", group: "elders" },
        { id: "Eric Terena", group: "elders" },

        { id: "Project Biome", group: "partners" },
        { id: "Hubcast International", group: "partners" },
        { id: "TreeGen", group: "partners" },

        { id: "Project Biome Regeneration", group: "project" },
        { id: "Cradle of Humankind", group: "project" },
        { id: "Earthdance Legacy", group: "project" },
        { id: "Regenerative Agriculture", group: "project" },
        { id: "Humans as Keystone Species", group: "project" },
        { id: "Global Consciousness Project", group: "project" },
        { id: "Global Coherence", group: "project" },

        { id: "Knowledge Graph", group: "knowledge" },
        { id: "Glossary", group: "knowledge" },
        { id: "Science & Coherence", group: "knowledge" },
        { id: "Ancestral Wisdom", group: "knowledge" },
        { id: "Sacred Geography", group: "knowledge" },
        { id: "Research & References", group: "knowledge" },
        { id: "Learning Materials", group: "knowledge" },
        { id: "Case Studies", group: "knowledge" },

        { id: "The Circle", group: "engage" },
        { id: "The Pillars", group: "engage" },
        { id: "Community Stories", group: "engage" },
        { id: "Events", group: "engage" }
      ],

      links: [
        { source: "ORIGIN", target: "Home" },
        { source: "ORIGIN", target: "About" },
        { source: "ORIGIN", target: "Projects" },
        { source: "ORIGIN", target: "Knowledge" },
        { source: "ORIGIN", target: "Engage" },
        { source: "ORIGIN", target: "Contact" },

        { source: "About", target: "Vision" },
        { source: "About", target: "Founders" },
        { source: "About", target: "Advisors" },
        { source: "About", target: "Indigenous Elders" },
        { source: "About", target: "Partners" },

        { source: "Founders", target: "Dr. Zach Bush" },
        { source: "Founders", target: "Chris Deckker" },
        { source: "Advisors", target: "Peter Young" },
        { source: "Advisors", target: "Rebecca Irby" },

        { source: "Indigenous Elders", target: "Ailton Krenak" },
        { source: "Indigenous Elders", target: "Thandiwe" },
        { source: "Indigenous Elders", target: "Nozipho" },
        { source: "Indigenous Elders", target: "Eric Terena" },
        { source: "Indigenous Elders", target: "Earthdance Legacy" },

        { source: "Partners", target: "Project Biome" },
        { source: "Partners", target: "Hubcast International" },
        { source: "Partners", target: "TreeGen" },

        { source: "Projects", target: "Project Biome Regeneration" },
        { source: "Projects", target: "Cradle of Humankind" },
        { source: "Projects", target: "Earthdance Legacy" },
        { source: "Projects", target: "Regenerative Agriculture" },
        { source: "Projects", target: "Humans as Keystone Species" },
        { source: "Projects", target: "Global Consciousness Project" },
        { source: "Projects", target: "Global Coherence" },

        { source: "Knowledge", target: "Knowledge Graph" },
        { source: "Knowledge", target: "Glossary" },
        { source: "Knowledge", target: "Science & Coherence" },
        { source: "Knowledge", target: "Ancestral Wisdom" },
        { source: "Knowledge", target: "Sacred Geography" },
        { source: "Knowledge", target: "Research & References" },
        { source: "Knowledge", target: "Learning Materials" },
        { source: "Knowledge", target: "Case Studies" },

        { source: "Engage", target: "The Circle" },
        { source: "Engage", target: "The Pillars" },
        { source: "Engage", target: "Community Stories" },
        { source: "Engage", target: "Events" }
      ]
    };
  }, []);

  const getColor = (group: string) => {
    switch (group) {
      case "core":
        return "#111827";
      case "nav":
        return "#EAB308";
      case "about":
        return "#3B82F6";
      case "people":
        return "#EF4444";
      case "elders":
        return "#F97316";
      case "partners":
        return "#22C55E";
      case "knowledge":
        return "#A855F7";
      case "project":
        return "#14B8A6";
      case "engage":
        return "#06B6D4";
      default:
        return "#9CA3AF";
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", background: "#fff" }}>
      <ForceGraph2D
        ref={graphRef}
        graphData={data}
        nodeLabel="id"
        linkColor={() => "#E5E7EB"}
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const label = node.id;
          const fontSize = 12 / globalScale;

          ctx.fillStyle = getColor(node.group);
          ctx.beginPath();
          ctx.arc(node.x, node.y, 6, 0, 2 * Math.PI, false);
          ctx.fill();

          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.fillStyle = "#111827";
          ctx.fillText(label, node.x + 8, node.y + 3);
        }}
        onNodeClick={(node: any) => {
          if (node.id === "ORIGIN") {
            graphRef.current?.zoomToFit(400);
          }
        }}
        cooldownTicks={100}
        d3AlphaDecay={0.02}
      />
    </div>
  );
}

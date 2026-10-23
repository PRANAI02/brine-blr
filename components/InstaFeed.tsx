"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

// Renders official Instagram post embeds for the given permalinks.
// Loads Instagram's embed.js once, then (re)processes the blockquotes.
export default function InstaFeed({ posts }: { posts: string[] }) {
  useEffect(() => {
    const process = () => window.instgrm?.Embeds.process();
    if (window.instgrm) {
      process();
      return;
    }
    const existing = document.getElementById("ig-embed-js");
    if (existing) {
      existing.addEventListener("load", process, { once: true });
      return;
    }
    const s = document.createElement("script");
    s.id = "ig-embed-js";
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    s.onload = process;
    document.body.appendChild(s);
  }, [posts]);

  return (
    <div className="ig-feed">
      {posts.map((url) => {
        const clean = url.split("?")[0].replace(/\/?$/, "/");
        return (
          <blockquote
            key={clean}
            className="instagram-media"
            data-instgrm-permalink={clean}
            data-instgrm-version="14"
          />
        );
      })}
    </div>
  );
}

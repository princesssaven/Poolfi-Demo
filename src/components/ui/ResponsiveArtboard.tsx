"use client";

import { useEffect, useRef, useState } from "react";

export default function ResponsiveArtboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState({
    scale: 1,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateMetrics = () => {
      const container = containerRef.current;
      const content = contentRef.current;

      if (!container || !content) return;

      const naturalWidth = content.scrollWidth;
      const naturalHeight = content.scrollHeight;

      if (!naturalWidth || !naturalHeight) return;

      const scale = Math.min(1, container.clientWidth / naturalWidth);

      setMetrics({
        scale,
        width: naturalWidth,
        height: naturalHeight,
      });
    };

    updateMetrics();

    const containerObserver = new ResizeObserver(updateMetrics);
    const contentObserver = new ResizeObserver(updateMetrics);

    if (containerRef.current) {
      containerObserver.observe(containerRef.current);
    }

    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    window.addEventListener("resize", updateMetrics);

    return () => {
      containerObserver.disconnect();
      contentObserver.disconnect();
      window.removeEventListener("resize", updateMetrics);
    };
  }, []);

  const scaledWidth = metrics.width * metrics.scale || undefined;
  const scaledHeight = metrics.height * metrics.scale || undefined;

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
      style={scaledHeight ? { height: scaledHeight } : undefined}
    >
      <div
        className="mx-auto"
        style={scaledWidth ? { width: scaledWidth } : undefined}
      >
        <div
          ref={contentRef}
          className="inline-block origin-top-left"
          style={{
            transform: `scale(${metrics.scale})`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

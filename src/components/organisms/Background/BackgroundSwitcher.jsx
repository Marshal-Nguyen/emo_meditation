import React, { useState, useEffect } from "react";

const STORAGE_PREFIX =
  "https://oqoundglstrviiuyvanl.supabase.co/storage/v1/object/public/";
function preloadImage(url) {
  const img = new window.Image();
  img.src = url;
}

function BackgroundSwitcher({ backgrounds, currentIndex, onChange, loading }) {
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    backgrounds.forEach((bg) => {
      const url = bg.storage_path.startsWith("/")
        ? bg.storage_path
        : STORAGE_PREFIX + bg.storage_path;
      preloadImage(url);
    });
  }, [backgrounds]);

  const handlePrev = () => {
    if (loading) return;
    const newIndex =
      currentIndex === 0 ? backgrounds.length - 1 : currentIndex - 1;
    onChange(newIndex);
  };
  const handleNext = () => {
    if (loading) return;
    const newIndex = (currentIndex + 1) % backgrounds.length;
    onChange(newIndex);
  };

  const currentBackground = backgrounds[currentIndex];

  return (
    <div
      style={{
        position: "fixed",
        bottom: isMobile ? 20 : 30,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: isMobile ? 12 : 16,
        pointerEvents: "auto",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? 8 : 12,
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(10px)",
          borderRadius: isMobile ? 14 : 16,
          padding: isMobile ? "6px 12px" : "8px 16px",
          boxShadow: "0 2px 8px rgba(175,77,255,0.08)",
          border: "1px solid rgba(175,77,255,0.08)",
          maxWidth: isMobile ? "calc(100vw - 24px)" : "220px",
          minWidth: isMobile ? "auto" : "120px",
        }}>
        <button
          onClick={handlePrev}
          disabled={loading}
          style={{
            width: isMobile ? 32 : 36,
            height: isMobile ? 32 : 36,
            borderRadius: "50%",
            background: loading
              ? "rgba(255,255,255,0.3)"
              : "rgba(175,77,255,0.12)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: isMobile ? 16 : 18,
            color: loading ? "#ccc" : "#AF4DFF",
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: "none",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            opacity: loading ? 0.5 : 1,
          }}
          aria-label="Background trước đó">
          <svg
            width={isMobile ? 18 : 20}
            height={isMobile ? 18 : 20}
            viewBox="0 0 20 20"
            fill="none">
            <path
              d="M13 16L7 10L13 4"
              stroke="#AF4DFF"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {!loading && currentBackground && (
          <div
            style={{
              flex: 1,
              fontSize: isMobile ? 14 : 15,
              fontWeight: 600,
              color: "#AF4DFF",
              textAlign: "center",
              textShadow: "0 1px 2px rgba(175,77,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 0,
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
              overflowX: "auto",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}>
            <span
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
              }}>
              {currentBackground.name}
            </span>
          </div>
        )}
        <button
          onClick={handleNext}
          disabled={loading}
          style={{
            width: isMobile ? 32 : 36,
            height: isMobile ? 32 : 36,
            borderRadius: "50%",
            background: loading
              ? "rgba(255,255,255,0.3)"
              : "rgba(175,77,255,0.12)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: isMobile ? 16 : 18,
            color: loading ? "#ccc" : "#AF4DFF",
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: "none",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            opacity: loading ? 0.5 : 1,
          }}
          aria-label="Background tiếp theo">
          <svg
            width={isMobile ? 18 : 20}
            height={isMobile ? 18 : 20}
            viewBox="0 0 20 20"
            fill="none">
            <path
              d="M7 4L13 10L7 16"
              stroke="#AF4DFF"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default BackgroundSwitcher;

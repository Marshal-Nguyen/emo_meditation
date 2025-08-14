import React from "react";
const STORAGE_PREFIX =
  "https://oqoundglstrviiuyvanl.supabase.co/storage/v1/object/public/";

function MusicList({ musics, current, onSelect, onClose }) {
  const isMobile = window.innerWidth <= 768;
  return (
    <div
      style={{
        position: "fixed",
        top: isMobile ? 70 : 80,
        right: isMobile ? 16 : 24,
        width: isMobile ? "calc(100vw - 32px)" : 320,
        maxWidth: isMobile ? "none" : 400,
        maxHeight: isMobile ? "calc(100vh - 140px)" : "70vh",
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(24px)",
        borderRadius: isMobile ? 16 : 18,
        boxShadow:
          "0 16px 48px rgba(175,77,255,0.12), 0 4px 12px rgba(0,0,0,0.08)",
        border: "1px solid rgba(175,77,255,0.07)",
        zIndex: 101,
        padding: isMobile ? "0" : "0",
        animation: "slideInFromRight 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "16px 16px 0 16px" : "18px 18px 0 18px",
          borderBottom: "2px solid rgba(175,77,255,0.1)",
          background: "rgba(255,255,255,0.18)",
          position: "sticky",
          top: 0,
          zIndex: 2,
        }}>
        <div
          style={{
            fontWeight: 700,
            fontSize: isMobile ? 16 : 18,
            color: "#AF4DFF",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
          🎶 Danh sách nhạc
          <span
            style={{
              fontSize: isMobile ? 11 : 12,
              fontWeight: 500,
              color: "#8B5A96",
              opacity: 0.8,
              marginLeft: 4,
            }}>
            ({musics.length})
          </span>
        </div>
        <button
          onClick={onClose}
          style={{
            background: "linear-gradient(135deg, #F8F4FF 0%, #EDE8FF 100%)",
            border: "2px solid rgba(175,77,255,0.2)",
            borderRadius: "50%",
            width: isMobile ? 36 : 40,
            height: isMobile ? 36 : 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: isMobile ? 16 : 18,
            color: "#AF4DFF",
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 2px 8px rgba(175,77,255,0.2)",
          }}
          onMouseEnter={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #AF4DFF 0%, #8B35E8 100%)";
            e.target.style.color = "#fff";
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #F8F4FF 0%, #EDE8FF 100%)";
            e.target.style.color = "#AF4DFF";
            e.target.style.transform = "scale(1)";
          }}>
          ✕
        </button>
      </div>

      {/* Music List */}
      <div
        style={{
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(175,77,255,0.3) transparent",
          padding: isMobile ? "16px 16px 12px 16px" : "18px 18px 12px 18px",
          flex: 1,
          minHeight: 0,
        }}>
        {musics.length === 0 && (
          <div
            style={{
              color: "#8B5A96",
              textAlign: "center",
              marginTop: isMobile ? 40 : 50,
              marginBottom: isMobile ? 40 : 50,
              fontSize: isMobile ? 14 : 15,
              opacity: 0.8,
            }}>
            <div
              style={{
                fontSize: isMobile ? 32 : 40,
                marginBottom: 12,
                opacity: 0.6,
              }}>
              🎵
            </div>
            Đang tải danh sách nhạc...
          </div>
        )}
        {musics.map((music, index) => {
          const isActive = current && current.id === music.id;
          return (
            <div
              key={music.id}
              onClick={() => onSelect(music)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? 12 : 14,
                padding: isMobile ? "12px 8px" : "14px 10px",
                marginBottom: isMobile ? 8 : 10,
                borderRadius: isMobile ? 12 : 14,
                cursor: "pointer",
                background: isActive
                  ? "linear-gradient(135deg, rgba(175,77,255,0.15) 0%, rgba(139,53,232,0.1) 100%)"
                  : "rgba(255,255,255,0.7)",
                border: isActive
                  ? "2px solid rgba(175,77,255,0.3)"
                  : "2px solid rgba(175,77,255,0.05)",
                boxShadow: isActive
                  ? "0 8px 24px rgba(175,77,255,0.2)"
                  : "0 2px 8px rgba(175,77,255,0.1)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.target.style.background = "rgba(175,77,255,0.08)";
                  e.target.style.transform = "translateX(4px)";
                  e.target.style.boxShadow = "0 4px 16px rgba(175,77,255,0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.target.style.background = "rgba(255,255,255,0.7)";
                  e.target.style.transform = "translateX(0)";
                  e.target.style.boxShadow = "0 2px 8px rgba(175,77,255,0.1)";
                }
              }}>
              {/* Thumbnail */}
              <img
                src={STORAGE_PREFIX + music.thumbnail_url.trim()}
                alt={music.title}
                style={{
                  width: isMobile ? 50 : 54,
                  height: isMobile ? 50 : 54,
                  borderRadius: isMobile ? 10 : 12,
                  objectFit: "cover",
                  boxShadow: "0 4px 12px rgba(175,77,255,0.3)",
                  border: isActive
                    ? "2px solid #AF4DFF"
                    : "2px solid rgba(255,255,255,0.5)",
                  transition: "all 0.3s ease",
                  flexShrink: 0,
                }}
              />
              {/* Track Number */}
              <div
                style={{
                  position: "absolute",
                  top: isMobile ? 8 : 10,
                  left: isMobile ? 8 : 10,
                  width: isMobile ? 20 : 22,
                  height: isMobile ? 20 : 22,
                  borderRadius: "50%",
                  background: isActive
                    ? "rgba(175,77,255,0.9)"
                    : "rgba(255,255,255,0.9)",
                  color: isActive ? "#fff" : "#AF4DFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: isMobile ? 9 : 10,
                  fontWeight: 700,
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(175,77,255,0.2)",
                }}>
                {index + 1}
              </div>
              {/* Song Info */}
              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                  overflow: "hidden",
                }}>
                <div
                  style={{
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? "#AF4DFF" : "#2D1B3D",
                    fontSize: isMobile ? 14 : 15,
                    lineHeight: 1.3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    marginBottom: 2,
                  }}>
                  {music.title}
                </div>
                <div
                  style={{
                    fontSize: isMobile ? 11 : 13,
                    color: isActive ? "#8B35E8" : "#8B5A96",
                    lineHeight: 1.2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    opacity: 0.9,
                  }}>
                  {music.artist}
                </div>
              </div>
              {/* Duration */}
              <div
                style={{
                  fontSize: isMobile ? 11 : 12,
                  color: isActive ? "#AF4DFF" : "#8B5A96",
                  minWidth: isMobile ? 35 : 40,
                  textAlign: "right",
                  fontWeight: isActive ? 600 : 500,
                  padding: isMobile ? "4px 6px" : "6px 8px",
                  borderRadius: isMobile ? 6 : 8,
                  background: isActive
                    ? "rgba(175,77,255,0.1)"
                    : "rgba(175,77,255,0.05)",
                  border: "1px solid rgba(175,77,255,0.1)",
                }}>
                {Math.floor(music.duration / 60)}:
                {String(music.duration % 60).padStart(2, "0")}
              </div>
              {/* Playing Indicator */}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: isMobile ? 8 : 12,
                    transform: "translateY(-50%)",
                    color: "#AF4DFF",
                    fontSize: isMobile ? 16 : 18,
                    animation: "musicPulse 2s infinite",
                  }}>
                  🎵
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes musicPulse {
          0%,
          100% {
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translateY(-50%) scale(1.1);
          }
        }

        /* Custom Scrollbar */
        div::-webkit-scrollbar {
          width: 6px;
        }

        div::-webkit-scrollbar-track {
          background: rgba(175, 77, 255, 0.05);
          border-radius: 3px;
        }

        div::-webkit-scrollbar-thumb {
          background: rgba(175, 77, 255, 0.3);
          border-radius: 3px;
          transition: background 0.3s;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: rgba(175, 77, 255, 0.5);
        }
      `}</style>
    </div>
  );
}

export default MusicList;

import React from "react";

function MusicControl({
  isPlaying,
  onPlay,
  onPause,
  onToggleList,
  current,
  showList,
}) {
  const isMobile = window.innerWidth <= 768;
  // SVG icons
  const PlayIcon = (
    <svg
      width={isMobile ? 20 : 22}
      height={isMobile ? 20 : 22}
      viewBox="0 0 24 24"
      fill="none">
      <circle cx="12" cy="12" r="12" fill="#fff" opacity="0.18" />
      <polygon points="9,7 19,12 9,17" fill="#fff" />
    </svg>
  );
  const PauseIcon = (
    <svg
      width={isMobile ? 20 : 22}
      height={isMobile ? 20 : 22}
      viewBox="0 0 24 24"
      fill="none">
      <circle cx="12" cy="12" r="12" fill="#fff" opacity="0.18" />
      <rect x="9" y="8" width="2.5" height="8" rx="1" fill="#fff" />
      <rect x="13" y="8" width="2.5" height="8" rx="1" fill="#fff" />
    </svg>
  );
  const ListIcon = (
    <svg
      width={isMobile ? 18 : 20}
      height={isMobile ? 18 : 20}
      viewBox="0 0 24 24"
      fill="none">
      <rect x="4" y="7" width="16" height="2" rx="1" fill="#fff" />
      <rect x="4" y="11" width="16" height="2" rx="1" fill="#fff" />
      <rect x="4" y="15" width="16" height="2" rx="1" fill="#fff" />
    </svg>
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: isMobile ? 6 : 10,
        background: "rgba(255,255,255,0.38)",
        backdropFilter: "blur(16px)",
        borderRadius: isMobile ? 14 : 18,
        boxShadow: "0 2px 8px rgba(175,77,255,0.08)",
        padding: isMobile ? "7px 10px" : "9px 14px",
        margin: isMobile ? "10px 10px 0 0" : "14px 14px 0 0",
        border: "1px solid rgba(175,77,255,0.05)",
        minWidth: isMobile ? "auto" : "180px",
        maxWidth: isMobile ? "calc(100vw - 20px)" : "260px",
        transition: "box-shadow 0.2s",
      }}>
      <button
        onClick={isPlaying ? onPause : onPlay}
        style={{
          width: isMobile ? 32 : 36,
          height: isMobile ? 32 : 36,
          borderRadius: "50%",
          background: isPlaying ? "#AF4DFF22" : "#F8F4FF88",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: isMobile ? 16 : 18,
          color: "#fff",
          boxShadow: isPlaying ? "0 2px 8px #AF4DFF33" : "none",
          cursor: "pointer",
          transition: "box-shadow 0.2s, background 0.2s, transform 0.2s",
          transform: "scale(1)",
        }}
        onMouseDown={(e) => (e.target.style.transform = "scale(0.93)")}
        onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        aria-label={isPlaying ? "Tạm dừng" : "Phát nhạc"}>
        {isPlaying ? PauseIcon : PlayIcon}
      </button>

      <div
        style={{
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
          paddingRight: isMobile ? 2 : 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}>
        <div
          style={{
            fontWeight: 600,
            color: "#fff",
            fontSize: isMobile ? 12 : 13,
            lineHeight: 1.2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            marginBottom: 1,
            letterSpacing: "0.01em",
            maxWidth: isMobile ? "90px" : "140px",
          }}>
          {current ? current.title : "Chọn bài hát"}
        </div>
        <div
          style={{
            fontSize: isMobile ? 10 : 11,
            color: "#fff",
            lineHeight: 1.2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: isMobile ? "90px" : "140px",
          }}>
          {current ? current.artist : "Chưa có bài hát nào"}
        </div>
      </div>

      <button
        onClick={onToggleList}
        style={{
          width: isMobile ? 28 : 32,
          height: isMobile ? 28 : 32,
          borderRadius: "50%",
          background: showList ? "#AF4DFF22" : "#F8F4FF88",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: isMobile ? 14 : 16,
          color: "#fff",
          boxShadow: showList ? "0 2px 8px #AF4DFF33" : "none",
          cursor: "pointer",
          transition: "box-shadow 0.2s, background 0.2s, transform 0.2s",
          transform: "scale(1)",
        }}
        onMouseDown={(e) => (e.target.style.transform = "scale(0.93)")}
        onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        aria-label="Danh sách nhạc">
        {ListIcon}
      </button>
    </div>
  );
}

export default MusicControl;

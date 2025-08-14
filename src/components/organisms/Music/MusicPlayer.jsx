import React, { useState, useEffect, useRef } from "react";
import MusicList from "./MusicList";
import MusicControl from "./MusicControl";

const SUPABASE_URL = "https://oqoundglstrviiuyvanl.supabase.co/rest/v1/musics";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xb3VuZGdsc3RydmlpdXl2YW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxOTg0MTYsImV4cCI6MjA2Mzc3NDQxNn0.JUiUhNV6Hlyyo7d7GFfZ4Xin18473sGVAB7EJIeX5m8";
const STORAGE_PREFIX =
  "https://oqoundglstrviiuyvanl.supabase.co/storage/v1/object/public/";

function MusicPlayer() {
  const [musics, setMusics] = useState([]);
  const [showList, setShowList] = useState(false);
  const [current, setCurrent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    fetch(SUPABASE_URL, {
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMusics(data));
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.play();
      else audioRef.current.pause();
    }
  }, [isPlaying, current]);

  const handleSelect = (music) => {
    setCurrent(music);
    setIsPlaying(true);
  };

  const handleToggleList = () => setShowList((v) => !v);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 100,
        maxWidth: "100vw",
      }}>
      <MusicControl
        isPlaying={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onToggleList={handleToggleList}
        current={current}
        showList={showList}
      />
      {showList && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(4px)",
              zIndex: 101,
            }}
            onClick={handleToggleList}
          />
          <MusicList
            musics={musics}
            current={current}
            onSelect={handleSelect}
            onClose={handleToggleList}
          />
        </>
      )}
      <audio
        ref={audioRef}
        src={current ? STORAGE_PREFIX + current.storage_path : undefined}
        onEnded={() => setIsPlaying(false)}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default MusicPlayer;

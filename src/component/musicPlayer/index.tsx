import React, { useState, useRef, useEffect } from "react";
import { FloatButton } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import "./musicPlayer.css";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      const isAudioPlaying =
        !audioRef.current.paused && audioRef.current.readyState > 2;
      console.log({ isAudioPlaying });
      setIsPlaying(isAudioPlaying);
    }
  }, [audioRef]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop autoPlay>
        <source
          src="https://cdn.biihappy.com/ziiweb/wedding-musics/BeautifulInWhite-ShaneFilan-524801.mp3"
          type="audio/mpeg"
        />
      </audio>
      <FloatButton.Group shape="circle">
        <FloatButton
          className="playerIcon"
          icon={
            isPlaying ? (
              <span id="playerVolumeOff" style={{ display: "block" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#fff"
                  className="bi bi-volume-mute-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"></path>
                </svg>
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#fff"
                className="bi bi-volume-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"></path>
                <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"></path>
                <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"></path>
              </svg>
            )
          }
          onClick={toggleMusic}
        />
        <FloatButton
          className="playerIcon"
          icon={<QuestionCircleOutlined />}
          type="default"
          style={{ insetInlineEnd: 94 }}
        />
      </FloatButton.Group>
    </div>
  );
};

export default MusicPlayer;

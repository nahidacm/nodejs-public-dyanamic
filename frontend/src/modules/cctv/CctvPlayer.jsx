import React, {useRef} from "react";
import ReactHlsPlayer from "react-hls-player";
import axios from "axios";

function CctvPlayer() {
  const playerRef = useRef();

  function playVideo() {
    playerRef.current.play();
  }

  function pauseVideo() {
    playerRef.current.pause();
  }

  function toggleControls() {
    playerRef.current.controls = !playerRef.current.controls;
  }

  // const videoSrc = "rtsp://admin:nt889946@103.145.210.146:554/Streaming/channels/101";
  const videoSrc = axios.defaults.baseURL + "cctv/video";
  // const videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

  return (
    <ReactHlsPlayer
      playerRef={playerRef}
      src={videoSrc}
      
    />
  );
}

export default CctvPlayer;

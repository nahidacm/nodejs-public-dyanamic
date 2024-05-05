
import React from 'react';
import ReactDOM from 'react-dom';
import ReactHlsPlayer from 'react-hls-player';
import axios from 'axios';

const PlayerOne = () => {
  const videoSrc = "http://epiclabs23.com:3020/playlist.m3u8";

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ReactHlsPlayer
        src={videoSrc}
        autoPlay={false}
        controls={true}
        width="80%"
        height="auto"
      />
    </div>
      );
};

export default PlayerOne;

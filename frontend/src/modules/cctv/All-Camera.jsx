
import 'video-react/dist/video-react.css';
import React from 'react';
import { Player } from 'video-react';
import ReactHlsPlayer from 'react-hls-player';


const PlayerAll = () => {
    const videoSrc = "http://epiclabs23.com:3020/playlist.m3u8";
    return (
        <div style={{ display: "flex-col", gap: "10px" }}>
            < div style={{ display: "flex", gap: "20px", padding: "20px" }}>
                <ReactHlsPlayer
                    src={videoSrc}
                    autoPlay={false}
                    controls={true}
                    width="50%"
                    // height="auto"

                />
                <ReactHlsPlayer
                    src={videoSrc}
                    autoPlay={false}
                    controls={true}
                    width="50%"
                    // height="auto"

                />
            </div>
            < div style={{ display: "flex", justifyContent: "space-between", gap: "20px", padding: "10px" }}>
                <ReactHlsPlayer
                    src={videoSrc}
                    autoPlay={false}
                    controls={true}
                    width="50%"
                   
                    // height="auto"

                />
                <ReactHlsPlayer
                    src={videoSrc}
                    autoPlay={false}
                    controls={true}
                    width="50%"
                    // height="auto"

                />
            </div>
        </div>
    );
};

export default PlayerAll;

import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

function BackgroundMusicPlayer({ videoId, isPlaying }) {
  const [player, setPlayer] = useState('');

  const playerOpts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: isPlaying ? 1 : 0,
      loop: 1,
      controls: 0,
      showinfo: 0,
      autohide: 0,
      modestbranding: 1,
    },
  };

  const onReady = (event) => {
    setPlayer(event.target);
  };

  useEffect(() => {
    if (player) {
      if (isPlaying) {
        player.playVideo();
      } else {
        player.pauseVideo();
      }
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [isPlaying]);

  return <YouTube videoId={videoId} opts={playerOpts} onReady={onReady} />;
}

export default BackgroundMusicPlayer;

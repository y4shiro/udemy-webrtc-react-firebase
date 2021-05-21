import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

import AudioAnalyser from './AudioAnalyser';
import VolumeButton from './VolumeButton';
import useDimensions from './hooks/useDimensions';

const useStyles = makeStyles({});

const Video = ({ isLocal, name, rtcClient, videoRef }) => {
  const [muted, setMuted] = useState(rtcClient.initialAudioMuted);
  const refCard = useRef(null);
  const dimensionsCard = useDimensions(refCard);
  const classes = useStyles();

  if (videoRef.current) {
    console.log({ isLocal, srcObject: videoRef.current.srcObject });
  }

  return (
    <Card ref={refCard}>
      <CardActionArea>
        <video
          autoPlay
          muted={isLocal || muted}
          ref={videoRef}
          width={dimensionsCard.width}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <VolumeButton
          isLocal={isLocal}
          muted={muted}
          rtcClient={rtcClient}
          setMuted={setMuted}
        />
        {!muted && videoRef.current && videoRef.current.srcObject && (
          <AudioAnalyser audio={videoRef.current.srcObject} />
        )}
      </CardActions>
    </Card>
  );
};

export default Video;

import React from 'react';
import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';

const getMedia = async () => {
  let constraints = { audio: true, video: true };

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch (err) {
    console.error(err);
  }
};

getMedia();

const App = () => {
  return (
    <>
      <InputFormLocal />
      <InputFormRemote />
    </>
  );
};

export default App;

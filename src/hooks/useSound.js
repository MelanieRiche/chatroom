import { useRef, useEffect } from 'react';

/**
 * Give the ability to play a given sound when something change
 * @param {object} sound - an audio file already imported 
 * @param {array} dependencies - an array of depencies for useEffect
 */
const useSound = (sound, dependencies) => {
// useRef allow us to memorize our audio element
  const audioElement = useRef(null);

  useEffect(() => {
    audioElement.current = new Audio(sound);
  }, []);

  // rewinds the sound and plays it
  useEffect(() => {
    audioElement.current.currentTime = 0;
    audioElement.current.play();
  }, dependencies);
};

export default useSound;

import { useRef } from "react";

const VideoPlayer = () => {
    const videoRef = useRef(null);

    const playVideo = () =>{
        videoRef.current.play();
    }

    const pauseVideo = () =>{
        videoRef.current.pause();
    }

    const forwardVideo = () =>{
        videoRef.current.currentTime += 5;
    }

    const rewindVideo = () =>{
        videoRef.current.currentTime -= 5;
    }

  return (
    <>
     <h2>VideoPlayer</h2>
    <video ref={videoRef} width="400" src='https://www.w3schools.com/html/mov_bbb.mp4' />
    <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
        <button onClick={forwardVideo}>Forward</button>
        <button onClick={rewindVideo}>Rewind</button>
    </div>
    </>
  )
}

export default VideoPlayer
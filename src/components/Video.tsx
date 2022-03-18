import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
// import Img from 'gatsby-image';
import { DocumentContext } from "../context/DocumentContext";
// import CursorInteractive from '../components/CursorInteractive';

const Video = ({
  autoPause,
  autoPlay,
  className,
  loop,
  muted,
  playing,
  playsInline,
  poster,
  src,
  style,
  withButton,
}: any) => {
  const { scrollTop, windowHeight } = useContext(DocumentContext);
  const videoRef = useRef<any>();
  const [refLoaded, setRefLoaded] = useState(false);
  // const [videoStarted, setVideoStarted] = useState(false);
  // const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    if (videoRef?.current && !refLoaded) {
      setRefLoaded(true);
      let curr: any = videoRef.current;
      curr.onpause = () => {
        if (videoRef?.current) {
          curr.playing = false;
        }
      };

      curr.onplaying = () => {
        if (videoRef?.current) {
          curr.playing = true;
          // setVideoStarted(true);
        }
      };
    }
  }, [videoRef.current]);

  // we don't want to show the poster for half a tick if the video is about to load, so wait a few seconds
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (autoPlay && !videoStarted) {
  //       setShowPoster(true);
  //     }
  //   }, 2000);
  // }, []);

  useEffect(() => {
    if (!autoPause || !refLoaded) {
      return;
    }

    const { height, top } = (videoRef.current as any).getBoundingClientRect();
    const video: any = videoRef.current;

    if (top > -height && top < windowHeight) {
      if (!video.playing) {
        video.play();
      }
    } else if (video.playing) {
      video.pause();
    }
  }, [scrollTop]);

  useEffect(() => {
    if (!refLoaded) {
      return;
    }

    const video: any = videoRef.current;

    if (playing) {
      if (!video.playing) {
        video.play();
      }
    } else if (video.playing) {
      video.pause();
    }
  }, [refLoaded, playing, videoRef.current]);

  return (
    <div className={className}>
      <div className="w-full relative block">
        {/* {videoRef?.current && withButton && (
          <CursorInteractive
            // mode={videoRef.current.playing ? `pause` : `play`}
            mode={videoRef.current.playing ? `hover` : `hover`}
            text={videoRef.current.playing ? `Pause` : `Play`}
          >
            <button
              type="button"
              className="w-full h-full absolute top-0 right-0 bottom-0 left-0 z-20"
              onClick={() => {
                if (!videoRef?.current?.playing) {
                  videoRef.current.play();
                } else {
                  videoRef.current.pause();
                }
              }}
            ></button>
          </CursorInteractive>
        )} */}

        <video
          ref={videoRef}
          className={className}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          poster={poster}
          style={style}
        >
          <source src={src}></source>
        </video>

        {/* {posterFluid && (
          <figure
            className={`w-full h-full transition-opacity opacity-${
              showPoster && !videoStarted ? 1 : 0
            } absolute top-0 right-0 bottom-0 left-0`}
          >
            <Img
              className={`w-full h-full object-cover ${className}`}
              fluid={posterFluid}
            />
          </figure>
        )} */}
      </div>
    </div>
  );
};

Video.defaultProps = {
  autoPause: true,
  autoPlay: false,
  className: ``,
  loop: true,
  muted: true,
  playing: true,
  playsInline: true,
  poster: null,
  src: ``,
  style: {},
  withButton: false,
};

Video.propTypes = {
  autoPause: PropTypes.bool,
  autoPlay: PropTypes.bool,
  className: PropTypes.string,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  playing: PropTypes.bool,
  playsInline: PropTypes.bool,
  poster: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.shape({}),
  withButton: PropTypes.bool,
};

export default Video;

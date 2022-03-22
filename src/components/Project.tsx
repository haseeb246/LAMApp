import React, { useContext, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
// import Img from "gatsby-image";
import { DocumentContext } from "../context/DocumentContext";
import WaveText from "./WaveText";
import Video from "./Video";
import Scrambler from "./Scrambler";
import LinkButton from "./LinkButton";

// import { DocumentContext } from "~context/DocumentContext";

// import Video from "~components/Video";
// import WaveText from "~components/WaveText";
// import LinkButton from "~components/LinkButton";
// import Scrambler from "~components/Scrambler";
// import SwiperCarousel from "~components/SwiperCarousel.jsx";
import { ProjectDto } from "./../models/projectDto";
import commonUtil from "./../utils/commonUtil";
export interface IProjectProps {
  project: ProjectDto;
  index: number;
}
const Project = ({ project, index }: IProjectProps) => {
  const { device, windowHeight } = useContext(DocumentContext);

  const projectRef = useRef<any>();

  const [hoverLink, setHoverLink] = useState<string | null>(null);

  // const imageOrder = index % 2 === 0 ? `0` : `1`;

  //

  let attributesVisible = false;

  if (projectRef?.current) {
    let cur: any = projectRef.current;
    const { top } = cur.getBoundingClientRect();

    attributesVisible = top > windowHeight * -0.1 && top < windowHeight * 0.8;
  }

  //

  // let image;
  // let imageXS;

  // if (project?.media?.image?.childImageSharp?.fluid) {
  //   image = project.media.image.childImageSharp.fluid;
  // }

  // if (project?.media?.imageXS?.childImageSharp?.fluid) {
  //   imageXS = project.media.imageXS.childImageSharp.fluid;
  // }

  //

  let taglineText = ``;

  if (project?.website && project?.title && hoverLink === project.title) {
    taglineText = project.website;
  } else if (project?.tagline) {
    taglineText = project.tagline;
  }

  //

  return (
    <li
      ref={projectRef}
      key={project.id + "_" + index}
      className="index-page__project grid relative pt-v8 xs:pt-v8 pb-v8 xs:pb-v8"
    >
      <div className="grid-end-8 xs:grid-end-12 order-1">
        <WaveText
          className="mb-v1 xs:mb-v2 b2 uppercase"
          text={project.title}
        />

        <div className="w-full relative block overflow-hidden">
          {/* <SwiperCarousel
            slides={project.media.map(mediaItem => {
              if (mediaItem?.videoSource) {
                return (
                  // <Video
                  //   key={`${project.id}-video`}
                  //   className="w-full relative block"
                  //   autoPlay
                  //   loop
                  //   muted
                  //   src={mediaItem.videoSource}
                  // />
                  <div className="w-full h-full">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full"
                    >
                      <source src={mediaItem.videoSource}></source>
                    </video>
                  </div>
                );
              } else {
                if (mediaItem?.imageSource?.childImageSharp?.fluid) {
                  return (
                    <figure className="desktop-only w-full relative block">
                      <Img
                        key={`${project.id}-image`}
                        className="w-full relative block"
                        fluid={
                          mediaItem?.imageMobileSource?.childImageSharp
                            ?.fluid && device === `mobile`
                            ? mediaItem.imageMobileSource.childImageSharp.fluid
                            : mediaItem.imageSource.childImageSharp.fluid
                        }
                        alt={project.title}
                      />
                    </figure>
                  );
                }
              }
            })}
          /> */}

          {project.media &&
            project.media.map(
              ({ imageMobileSource, imageSource, videoSource }: any) => {
                // console.log(`imageMobileSource`, imageMobileSource);
                // console.log(`imageSource`, imageSource);

                // if (imageMobileSource) {
                //   imageMobileSource =
                //     imageMobileSource.split(`../../static`)[1];
                // }

                // if (imageSource) {
                //   imageSource = imageSource.split(`../../static`)[1];
                // }

                if (videoSource) {
                  return (
                    <Video
                      key={`${project.id}-video`}
                      className="w-full relative block"
                      autoPlay
                      loop
                      muted
                      src={videoSource}
                    />
                  );
                }
                return (
                  <figure className="w-full relative block">
                    {/* <Img
                  key={`${project.id}-image`}
                  className="w-full relative block"
                  fluid={
                    mediaItem?.imageMobileSource?.childImageSharp?.fluid &&
                    device === `mobile`
                      ? mediaItem.imageMobileSource.childImageSharp.fluid
                      : mediaItem.imageSource.childImageSharp.fluid
                  }
                  alt={project.title}
                /> */}
                    <img
                      key={`${project.id}-image`}
                      className="w-full relative block"
                      src={
                        device === `mobile`
                          ? commonUtil.GetImagePath(imageMobileSource)
                          : commonUtil.GetImagePath(imageSource)
                      }
                      alt={project.title}
                    />
                  </figure>
                );
              }
            )}
        </div>

        <div className="w-full flex justify-between pt-v1 xs:pt-v2">
          <Scrambler className="b2" iterations={8} text={taglineText} />
        </div>
      </div>

      <div className="desktop-only grid-end-4 pt-v2">
        <ul className="w-full relative">
          {project.attributes.map((attribute: any, attributeIndex: number) => {
            const attributeKey = `${project.id}-attribute-${attributeIndex}`;

            return (
              <li
                key={attributeKey}
                className="transition-opacity-transform relative block"
                style={{
                  transform: `translate3d(${
                    attributesVisible ? `0` : `2vw`
                  }, 0, 0)`,
                  opacity: attributesVisible ? 1 : 0,
                  transitionDelay: `${attributeIndex * 25}ms`,
                }}
              >
                <Scrambler
                  className="caption mono"
                  delay={5 + attributeIndex}
                  iterations={10}
                  text={attributesVisible ? attribute : `Loading...`}
                />
              </li>
            );
          })}
        </ul>

        {project.website && (
          <a
            className="block mt-8"
            href={project.website}
            rel="noopener noreferrer"
            target="_blank"
            onMouseEnter={() => setHoverLink(project.title)}
            onMouseLeave={() => setHoverLink(null)}
          >
            <LinkButton color="white" />
          </a>
        )}
      </div>
    </li>
  );
};

export default Project;

// Project.propTypes = {
//   index: PropTypes.number.isRequired,
//   project: PropTypes.shape({
//     attributes: PropTypes.arrayOf(PropTypes.string),
//     id: PropTypes.number,
//     media: PropTypes.shape({
//       // image: PropTypes.string,
//       // imageXS: PropTypes.string,
//       // video: PropTypes.string
//     }),
//     name: PropTypes.string,
//     tagline: PropTypes.string,
//     title: PropTypes.string,
//     website: PropTypes.string,
//   }).isRequired,
// };

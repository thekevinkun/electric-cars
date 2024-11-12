import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { Button } from "../components";

import { videoPoster, video } from "../assets";

const Preview = () => {
  const { ref, inView } = useInView();
  const videoRef = useRef(null);

  useEffect(() => {
    if (inView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [inView]);

  return (
    <section id="preview" className="relative w-full h-[100svb]">
      <div ref={ref} className="w-full h-full">
        <video
          ref={videoRef}
          loop
          autoPlay
          playsInline
          controls={false}
          poster={videoPoster}
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="padding-x padding-y w-full h-full absolute top-0 z-40">
        <div className="h-full flex flex-col md:items-start items-center justify-end lg:justify-center">
          <h2 className="font-bold lg:text-[3rem] text-[1.5rem] text-primary">
            The Future Of Electric Cars
          </h2>

          <Button
            href="#joinus"
            className="w-fit mt-7 text-button bg-primary text-sm"
            textButton="text-button"
            px="md:px-5 px-3"
            py="lg:py-3 py-2"
          >
            Join Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Preview;

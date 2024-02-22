import { useChain, useSpringRef } from "@react-spring/web";
import Link from "next/link";
import { useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import Trail from "./anim/trail-anim";
import Card from "./ui/card";
const stoxLogoBig = "https://firebasestorage.googleapis.com/v0/b/portfolio-ffccf.appspot.com/o/vt-app.png?alt=media&token=2b303e50-2852-459e-86a8-9dc1397eae83";
const stockDekhoLogo = "https://firebasestorage.googleapis.com/v0/b/portfolio-ffccf.appspot.com/o/stox-dekho.png?alt=media&token=30b8798f-5613-48fa-87d3-45b187ec4f2d";
const Bg = "https://firebasestorage.googleapis.com/v0/b/portfolio-ffccf.appspot.com/o/Bg2.png?alt=media&token=53ce20e1-8414-4b99-8363-a606466aff6c";
const Bgbig = "https://firebasestorage.googleapis.com/v0/b/portfolio-ffccf.appspot.com/o/Burger2.png?alt=media&token=f17105d9-7fff-4eca-9c69-6cbccc4979ad";
const selfDrivingLogo = "https://firebasestorage.googleapis.com/v0/b/portfolio-ffccf.appspot.com/o/selfdrivingcarlogo.png?alt=media&token=ebf9e1d6-c802-4ad8-a391-c45ea2f9b11f";
export default function Projects() {
  const headingRef = useSpringRef();
  const projectsRef = useSpringRef();
  const scrollRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollLeft = 200;
  //   }
  // }, [scrollRef.current]);

  useChain([projectsRef, headingRef], [0.2, 1]);
  return (
    <>
      <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
        <Trail animRef={headingRef}>
          <div className="font-medium text-2xl">Projects</div>
        </Trail>
      </div>
      <ScrollContainer
        horizontal
        nativeMobileScroll
        innerRef={scrollRef}
        className="flex gap-3 md:gap-10 w-screen hover:cursor-pointer overflow-visible py-16 -my-20 md:px-16 lg:px-10  xl:px-[22%] px-5"
      >
        <Trail animRef={projectsRef}>
          <Link href="/projects/stox-dekho">
            <Card topImg={stockDekhoLogo} bottomImg={stoxLogoBig} bgColor="#000" />
          </Link>
          <Link href="/projects/SelfDrivingCar">
            <Card
              topTitle="   Autonomous Driving    Car"
              bottomImg={selfDrivingLogo}
              bottomImageClassName=""
              bgColor="#1F2937"
            />
          </Link>
          <Link href="/projects/WhopperBot">
            <Card
              topImg={Bg}
              bottomImg={Bgbig}
              bgColor="linear-gradient( #0cc0df, #0cc0df)"
              
            />
          </Link>
        </Trail>
      </ScrollContainer>
    </>
  );
}

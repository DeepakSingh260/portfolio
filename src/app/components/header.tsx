import { useChain, useSpringRef } from "@react-spring/web";
import Image from "next/image";
const deepakDp = "https://firebasestorage.googleapis.com/v0/b/portfolio-ffccf.appspot.com/o/me.jpg?alt=media&token=c8746d8a-640b-4c5d-a48e-209efebb91e7";
import SlideLeft from "./anim/slide-left-anim";
import SlideUp from "./anim/slide-up-anim";
import Trail from "./anim/trail-anim";
import Socials from "./socials";

export default function Header() {
  const dpRef = useSpringRef();
  const nameRef = useSpringRef();
  const bioRef = useSpringRef();
  useChain([nameRef, bioRef, dpRef], [0, 0.3, 0.8]);

  return (
    <div className="flex md:flex-row flex-col md:gap-10 gap-5 w-full max-w-4xl ">
      <SlideUp animRef={dpRef}>
        <Image
          src={deepakDp}
          alt="deepak_dp"
          width={0}
          height={0}
          className="rounded-full w-32 h-32 md:w-56 md:h-56 "
        />
      </SlideUp>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Trail animRef={nameRef}>
            <div className="font-medium text-4xl">Deepak</div>
            <div className="font-medium text-4xl">Singh</div>
          </Trail>
        </div>
        <SlideLeft animRef={bioRef}>
          <div className="font-sans text-sm font-semibold max-w-xs">
            I’m a full stack developer who wants to help make the internet a more
            creative, accessible, and better place.
          </div>
        </SlideLeft>
        <Socials />
      </div>
    </div>
  );
}

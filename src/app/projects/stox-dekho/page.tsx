"use client";

import BgSpringAnim from "@/app/components/anim/bg-spring-anim";
import FadeIn from "@/app/components/anim/fade-in-anim";
import SlideLeft from "@/app/components/anim/slide-left-anim";
import SlideUp from "@/app/components/anim/slide-up-anim";
import Trail from "@/app/components/anim/trail-anim";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useChain, useSpringRef } from "@react-spring/web";
import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { GrNode } from "react-icons/gr";
import { TbBrandFirebase } from "react-icons/tb";

const stockLogo = "https://firebasestorage.googleapis.com/v0/b/portfolio-ffccf.appspot.com/o/vt-app.png?alt=media&token=2b303e50-2852-459e-86a8-9dc1397eae83";
const  stockDekho = "https://firebasestorage.googleapis.com/v0/b/portfolio-ffccf.appspot.com/o/stox-dekho.png?alt=media&token=30b8798f-5613-48fa-87d3-45b187ec4f2d";


export default function AldifestPage() {
  const techRef = useSpringRef();
  const techTitleRef = useSpringRef();
  const titleRef = useSpringRef();
  const logoRef = useSpringRef();
  const logoBigRef = useSpringRef();
  const descRef = useSpringRef();

  useChain(
    [titleRef, logoRef, descRef, logoBigRef, techRef, techTitleRef],
    [0, 0.2, 0.25, 0.3, 0.5, 1]
  );

  return (
    <main className="flex w-screen min-h-screen items-center bg-[#000] flex-col gap-10 xl:px-24 md:px-16 px-5 py-8 ">
      <div className="flex flex-col gap-10 max-w-4xl w-full">
        <Link href="/" className="mr-auto">
          <SlideLeft>
            <BgSpringAnim>
              <ArrowLeftOutlined className="text-3xl text-white" />
            </BgSpringAnim>
          </SlideLeft>
        </Link>
        <div className="flex md:flex-row flex-col justify-between gap-10">
          <div className="flex flex-col gap-10">
            <SlideLeft animRef={logoRef} direction="right">
              <Image
                alt="aldi_logo"
                src={stockDekho}
                width={0}
                height={0}
                className="w-52 "
              />
            </SlideLeft>
            <Link href="https://play.google.com/store/apps/details?id=com.tensorflow.stoxdekho" target="_blank">
              <div className="underline underline-offset-2 text-white">
                <Trail animRef={titleRef}>
                  <span className="font-medium text-3xl max-w-sm text-white">
                  Stox Dekho: 
                  </span>
                  <span className="font-medium text-3xl max-w-sm text-white">
                  India's first gamified
                  </span>
                  <span className="font-medium text-3xl max-w-sm text-white">
                  paper trading app{" "}
                  </span>
                </Trail>
              </div>
            </Link>
            <div className="flex flex-col gap-5">
              <SlideUp animRef={techTitleRef}>
                <div className="font-sans font-semibold text-sm max-w-md text-white">
                  Technologies Used
                </div>
              </SlideUp>
              <div className="flex gap-5">
                <Trail animRef={techRef}>
                  <BgSpringAnim>
                    <Tooltip placement="bottom" title="ReactJS">
                      <FaReact className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                  <BgSpringAnim>
                    <Tooltip placement="bottom" title="Firebase">
                      <TbBrandFirebase className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                  <BgSpringAnim>
                    <Tooltip placement="bottom" title="NodeJS">
                      <GrNode  className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                </Trail>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <FadeIn animRef={descRef}>
              <div className="font-sans md:text-lg text-sm max-w-md text-white">
              Introducing Stox Dekho, India's first gamified paper trading platform, designed to revolutionize the way individuals learn and practice trading without risking real money. Our innovative app provides users with a risk-free environment to hone their trading skills while offering opportunities to earn real rewards.{" "}
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="w-96 mx-auto mt-auto md:block hidden">
          <SlideUp animRef={logoBigRef}>
            <Image alt="aldi_logo_big" src={stockLogo} width={0} height={0} />
          </SlideUp>
        </div>
      </div>
    </main>
  );
}

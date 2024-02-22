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
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMaterialdesign } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaKaggle } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
const Carla = "https://firebasestorage.googleapis.com/v0/b/portfolio-ffccf.appspot.com/o/selfdrivingcarlogo.png?alt=media&token=ebf9e1d6-c802-4ad8-a391-c45ea2f9b11f";

export default function BlogAppPage() {
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
    <main className="flex w-screen min-h-screen items-center bg-[#1F2937] flex-col gap-10 xl:px-24 md:px-16 px-5 py-8 ">
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
              <Link href={"https://ideepaksinghs.wordpress.com/2023/08/03/mastering-self-driving-car-technology-with-carla-a-supervised-learning-adventure-in-python/"}>
              <div className="text-[#EF85EF] font-bold md:text-4xl text-lg">
                Autonomous Car
              </div>
              </Link>
            </SlideLeft>
            <Link
              href="https://www.youtube.com/watch?v=EzxhkEQUJqY"
              target="_blank"
            >
              <div className="underline underline-offset-2 text-white">
                <Trail animRef={titleRef}>
                  <span className="font-medium text-3xl max-w-sm text-white">
                  Steering the Future:  
                  </span>
                  <span className="font-medium text-3xl max-w-sm text-white">
                  CNN-Based
                  </span>
                  <span className="font-medium text-3xl max-w-sm text-white">
                  Self-Driving Exploration
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
                    <Tooltip placement="bottom" title="Tensorflow">
                      <SiTensorflow className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                  <BgSpringAnim>
                    <Tooltip placement="bottom" title="Kaggle">
                      <FaKaggle className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                  <BgSpringAnim>
                    <Tooltip placement="bottom" title="Autonomous Driving">
                      <FaCar className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                </Trail>
              </div>
            </div>
          </div>
          <div className="w-96 mx-auto mt-auto md:block hidden">
            <SlideUp animRef={logoBigRef}>
              <Image alt="aldi_logo_big" src={Carla} width={0} height={0} />
            </SlideUp>
          </div>
          <div className="flex flex-col gap-5">
            <FadeIn animRef={descRef}>
              <div className="font-sans md:text-lg text-sm max-w-md text-white">
              Embarking on a self-driving car journey, I delve into CNN-based steering angle prediction. Leveraging a Kaggle dataset and Carla simulator, the model excels in straight road navigation but grapples with turns, prompting insights on data augmentation and the need for a more diverse dataset for future improvements.
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}

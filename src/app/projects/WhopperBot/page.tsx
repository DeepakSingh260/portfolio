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
import { FiFramer } from "react-icons/fi";
import { FaNodeJs } from "react-icons/fa";
import { TbPrompt } from "react-icons/tb";
import { TbSettingsAutomation } from "react-icons/tb";
// import chatBig from "../../assets/BurgerKingBot.webp";
const chatBig = "https://firebasestorage.googleapis.com/v0/b/portfolio-ffccf.appspot.com/o/BurgerKingBot.webp?alt=media&token=a690961c-986c-4914-821c-92b7261d547b";
export default function StageversePage() {
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
    <main className="flex w-full min-h-screen overflow-hidden items-center bg-gradient-to-r from-[#6e80ef] to-[#61dfc7] flex-col gap-10 xl:px-24 md:px-16 px-5 py-8 ">
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
            <Link
              href="https://ideepaksinghs.wordpress.com/2023/08/14/revolutionizing-communication-how-gpt-3-5-and-whatsapp-combine-to-create-an-unstoppable-chatbot-part-2/"
              target="_blank"
            >
              <p style={{color:'#fff' }}>WhopperBot</p>
            </Link>
            </SlideLeft>
            <Link
              href="https://www.youtube.com/watch?v=F0Umm9FQtr8&t=361s"
              target="_blank"
            >
              <div className="underline underline-offset-2 text-white">
                <Trail animRef={titleRef}>
                  <span className="font-medium text-2xl max-w-sm text-white">
                  Revolutionizing Customer Engagement: 
                  </span>
                  <span className="font-medium text-xl max-w-sm text-white">
                  Building an Advanced WhatsApp ChatBot with GPT-3.5 
                  </span>
                  <span className="font-medium text-xl max-w-sm text-white">
                  and Firebase Integration for{" "}
                  </span>
                  <span className="font-medium text-xl max-w-sm text-white">
                    Burger King Order Placement{" "}
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
                    <Tooltip placement="bottom" title="NodeJS">
                      <FaNodeJs className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                  <BgSpringAnim>
                    <Tooltip placement="bottom" title="Prmopt Engineering">
                      <TbPrompt className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                  <BgSpringAnim>
                    <Tooltip placement="bottom" title="Automation">
                      <TbSettingsAutomation className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                </Trail>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <FadeIn animRef={descRef}>
              <div className="font-sans md:text-lg text-sm max-w-md text-white">
              This project involves creating a cutting-edge WhatsApp ChatBot by leveraging GPT-3.5 and integrating Firebase services. The development includes a well-organized folder structure, route definitions, and essential service files like firebase.js and generate.js. The project aims to revolutionize communication and customer engagement, showcasing skills in web development, API integration, and AI-powered assistance..{" "}
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="w-72 mx-auto mt-auto md:block hidden scale-[200%]">
          <SlideUp animRef={logoBigRef}>
            <Image
              alt="chat"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ffccf.appspot.com/o/BurgerKingBot.webp?alt=media&token=a690961c-986c-4914-821c-92b7261d547b"
              width={0}
              height={0}
              unoptimized = {true}
              style={{borderRadius:10}}
            />
          </SlideUp>
        </div>
      </div>
    </main>
  );
}

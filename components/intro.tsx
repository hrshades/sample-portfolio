"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref, setActiveSection, setTimeOfLastClick } = useSectionInView(
    "Home",
    0.9
  );
  const { scrollYProgress } = useScroll();
  const size = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0 -mt-5"
      ref={ref}
    >
      <div className="flex items-center justify-center gap-5">
        <div className="relative">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            style={{
              scale: size,
            }}
          >
            <Image
              src="/IMG2.jpg"
              width="250"
              height="250"
              quality="95"
              priority={true}
              alt="Avatar"
              className="h-[9rem] w-[9rem] border-[0.35rem] border-gray-900 object-cover shadow-xl rounded-3xl"
            />
          </motion.div>
          <motion.span
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I'm Mehran.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">6 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 focus:bg-gray-950 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
        >
          Download CV
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="flex items-center rounded-full border border-black/10 bg-white p-4 text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] focus:text-gray-950 active:scale-105 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          className="flex items-center rounded-full border border-black/10 bg-white p-4 text-[1.35rem] text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] focus:text-gray-950 active:scale-105 dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

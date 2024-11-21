"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.175,
      }}
      ref={ref}
    >
      <h2 className="text-3xl font-medium text-gray-950 dark:text-white">
        About Me
      </h2>
      <p className="mb-3 mt-8 px-4 dark:text-white/80">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for programming. I enrolled in a coding bootcamp and
        learned <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React and Next.js</span>. I am also
        familiar with TypeScript and Prisma. I am always looking to learn new
        technologies. I am currently learning new technologies{" "}
        <span className="font-medium">full-time</span> as a software developer.
      </p>
      <p className="px-4 dark:text-white/80">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        martial sports, watching movies, and traveling. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}

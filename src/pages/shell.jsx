import * as lazy from "./lazyLoad";
import { Suspense } from "react";
import Skeleton from "../components/skeleton-loader";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./styles.module.scss";
import TopScroll from "../components/top-scroll-btn";

const Shell = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main>
      <motion.section className={styles.progressBar} style={{ scaleX }} />
      <h1 className={styles.heading}>Magical React</h1>
      <Suspense fallback={<Skeleton />}>
        <lazy.WhatIsReact />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <lazy.MagicalReact />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <lazy.ClassToFunc />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <lazy.ReactUpdates />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <lazy.CompareFrameworks />
      </Suspense>
      <TopScroll />
    </main>
  );
};

export default Shell;

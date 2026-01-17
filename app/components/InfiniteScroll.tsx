"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { twMerge } from "tailwind-merge";
import globe from "../../public/globe.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);
interface InfiniteScrollProps {
  isReversed?: boolean;
  className?: string;
}


const TECHNOLOGY_ICONS = [globe, globe, globe, globe, globe];
const LABELS = [
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
];
const ELEMENTS = TECHNOLOGY_ICONS.map((icon, i) => ({
  icon,
  label: LABELS[i],
}));
const DOUBLE_ELEMENTS = [...ELEMENTS, ...ELEMENTS];

const InfiniteScroll = ({ isReversed = false, className }: InfiniteScrollProps) => {
  const movingContainer = useRef(null);
 const timeline = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const setupInfiniteMarqueeTimeline = () => {
        gsap.set(movingContainer.current, {
          xPercent: isReversed ? -50 : 0,
        });
        timeline.current = gsap
          .timeline({ defaults: { ease: "none", repeat: -1 } })
          .to(movingContainer.current, {
            xPercent: isReversed ? 0 : -50,
            duration: 20,
          })
          .set(movingContainer.current, { xPercent: 0 });
      };
      setupInfiniteMarqueeTimeline();
    },
    { dependencies: [isReversed] }
  );

  let timelineTimeScaleTween = useRef<gsap.core.Tween | null>(null);
  const onPointerEnter = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 0.25,
      duration: 0.4,
    });
  };
  const onPointerLeave = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 1,
      duration: 0.2,
    });
  };

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-14 px-10">
        {DOUBLE_ELEMENTS.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-white text-lg font-medium w-[250px] text-center leading-tight"
            style={{
              whiteSpace: "normal", // ✅ allow wrapping
              wordWrap: "break-word", // ✅ break long words cleanly
            }}
          >
            <Image
              src={item.icon}
              alt={item.label}
              height={34}
              width={34}
              className="object-contain"
            />
            <span className="text-2xl text-white/50">{item.label}</span>
          </div>
        ))}
      </div>
    ),
    []
  );

  return (
    <div
      className={twMerge(
        "relative w-full overflow-hidden select-none z-40 py-2 sm:py-4 px-6 sm:px-8", // ✅ padding added here
        className
      )}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        position: "relative",
        transformOrigin: "center",
      }}
    >
        <h1 className="text-center p-8 text-xl text-white/50 font-extralight">TRUSTED BY LEADING DUBAI REAL ESTATE AGENCIES</h1>
      <div
        ref={movingContainer}
        className="flex w-fit items-center gap-8 sm:gap-14 px-6 sm:px-10"
        style={{
          height: "100%",
        }}
      >
        {list}
      </div>
    </div>
  );
};

export default InfiniteScroll;
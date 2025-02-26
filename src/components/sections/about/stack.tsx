import React, { PropsWithChildren, ReactNode, useRef } from "react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "motion/react";

type StackProps = {} & PropsWithChildren;

const Stack: React.FC<StackProps> = ({ children }) => {
  return (
    <div>
      {children}

      <Dock></Dock>
    </div>
  );
};

const SCALE = 1.8; // max scale factor of an icon
const DISTANCE = 120; // pixels before mouse affects an icon
const NUDGE = 30; // pixels icons are moved away from mouse
const SPRING = {
  mass: 0.5,
  stiffness: 170,
  damping: 11,
};
const APPS = ["Safari", "Mail", "Messages", "Photos", "Notes", "Calendar", "Reminders", "Music"];

export function Dock() {
  const mouseLeft = useMotionValue(-Infinity);
  const mouseRight = useMotionValue(-Infinity);
  const left = useTransform(mouseLeft, [0, 40], [0, -40]);
  const right = useTransform(mouseRight, [0, 40], [0, -40]);
  const leftSpring = useSpring(left, SPRING);
  const rightSpring = useSpring(right, SPRING);

  return (
    <>
      <motion.div
        onMouseMove={(e) => {
          const { left, right } = e.currentTarget.getBoundingClientRect();
          const offsetLeft = e.clientX - left;
          const offsetRight = right - e.clientX;
          mouseLeft.set(offsetLeft);
          mouseRight.set(offsetRight);
        }}
        onMouseLeave={() => {
          mouseLeft.set(-Infinity);
          mouseRight.set(-Infinity);
        }}
        className="relative mx-auto hidden h-16 items-end gap-3 px-2 pb-3 sm:flex"
      >
        <motion.div
          className="absolute inset-y-0 -z-10"
          style={{ left: leftSpring, right: rightSpring }}
        />

        {Array.from(Array(APPS.length).keys()).map((i) => (
          <AppIcon key={i} mouseLeft={mouseLeft}>
            {APPS[i]}
          </AppIcon>
        ))}
      </motion.div>

      <div className="sm:hidden">
        <div className="mx-auto flex h-16 max-w-full items-end gap-4 overflow-x-scroll rounded-2xl bg-gray-700 px-4 pb-3 sm:hidden">
          {Array.from(Array(8).keys()).map((i) => (
            <div key={i} className="aspect-square w-10 flex-shrink-0 rounded-full bg-gray-100" />
          ))}
        </div>
        <p className="mt-4 text-center text-xs font-medium text-gray-300">
          View at 640px with a mouse
          <br /> to see the interaction.
        </p>
      </div>
    </>
  );
}

function AppIcon({ mouseLeft, children }: { mouseLeft: MotionValue; children: ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);

  const distance = useTransform(() => {
    const bounds = ref.current
      ? { x: ref.current.offsetLeft, width: ref.current.offsetWidth }
      : { x: 0, width: 0 };

    return mouseLeft.get() - bounds.x - bounds.width / 2;
  });

  const scale = useTransform(distance, [-DISTANCE, 0, DISTANCE], [1, SCALE, 1]);
  const x = useTransform(() => {
    const d = distance.get();
    if (d === -Infinity) {
      return 0;
    } else if (d < -DISTANCE || d > DISTANCE) {
      return Math.sign(d) * -1 * NUDGE;
    } else {
      return (-d / DISTANCE) * NUDGE * scale.get();
    }
  });

  const scaleSpring = useSpring(scale, SPRING);
  const xSpring = useSpring(x, SPRING);
  const y = useMotionValue(0);

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.button
            ref={ref}
            style={{ x: xSpring, scale: scaleSpring, y }}
            className="tooltip-item block aspect-square w-10 origin-bottom rounded-lg bg-black shadow"
          />
        </TooltipTrigger>
        <TooltipContent
          sideOffset={10}
          className="rounded-md border border-gray-600 bg-gray-700 px-2 py-1.5 text-sm font-medium text-white shadow shadow-black"
        >
          {children}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default Stack;

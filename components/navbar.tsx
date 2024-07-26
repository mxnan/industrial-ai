"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, MenuItem, HoveredLink,  ContentCard } from "./ui/navbar-menu";
import ThemeToggle from "@/components/theme-toggle";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowDownIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { solutionLinks } from "@/lib/constant";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="relative w-full z-50 ">
      <NavbarSetup />
    </nav>
  );
}

function NavbarSetup({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex-between px-[1.5rem] max-w-[1686px] mx-auto w-full fixed top-0 max-sm:py-6 inset-x-0 rounded-b-3xl backdrop-blur-[20px] ",
        className
      )}
    >
      <span>IndustrialAI</span>
      <Menu setActive={setActive}>
        {/*Solutions*/}
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="relative grid grid-cols-4 max-xl:grid-cols-1 gap-4">
            <div className="col-span-1  space-y-5 mt-2 px-2">
              <p className="text-xl font-bold">
                {solutionLinks.sections[0].title}
              </p>
              <div className="flex flex-col gap-2 text-sm">
                {solutionLinks.sections[0].items.map((item, index) => (
                  <HoveredLink key={index} href={item.href}>
                    {item.label}
                  </HoveredLink>
                ))}
              </div>
            </div>
            <div className="col-span-1 space-y-5 mt-2 px-2">
              <p className="text-xl font-bold">
                {solutionLinks.sections[1].title}
              </p>
              <div className="flex flex-col gap-2 text-sm">
                {solutionLinks.sections[1].items.map((item, index) => (
                  <HoveredLink key={index} href={item.href}>
                    {item.label}
                  </HoveredLink>
                ))}
              </div>
            </div>

            <div className="col-span-2 flex flex-col gap-6 pl-4">
              <Button
                size={"lg"}
                variant={"ghost"}
                className="flex text-lg font-semibold items-center gap-3 "
              >
                Case Studies
                <ArrowRightIcon className="w-5 h-5 hover:rotate-[25deg] transition-transform ease-in-out duration-200" />
              </Button>
              <ContentCard
                title="How a multi-billion dollar manufacturer boosted sales volume with Industrial AI."
                href="/content/content1.webp"
                src="/assets/content1.webp"
                description="Industrial AI built a custom automated quoting solution using Generative AI integrated with ERP and CRM systems."
              />
            </div>
          </div>
        </MenuItem>
        {/*Our  Approach*/}
        <MenuItem
          setActive={setActive}
          active={active}
          icon={<ArrowDownIcon className="h-5 w-5" />}
          item="Our Approach"
        >
          <Button
            variant={"ghost"}
            size={"lg"}
            className="flex  font-semibold items-center gap-3 "
          >
            <Link href={"/approach"}>Our Approach</Link>
            <ArrowRightIcon className="w-5 h-5 hover:rotate-[25deg] transition-transform ease-in-out duration-200" />
          </Button>
        </MenuItem>
        {/*Security*/}
        <MenuItem
          setActive={setActive}
          active={active}
          icon={<ArrowDownIcon className="h-5 w-5" />}
          item="Security"
        >
          <Button
            variant={"ghost"}
            size={"lg"}
            className="flex font-semibold items-center gap-3 "
          >
            <Link href={"/security"}>Security</Link>
            <ArrowRightIcon className="w-5 h-5 hover:rotate-[25deg] transition-transform ease-in-out duration-200" />
          </Button>
        </MenuItem>
        {/*Company*/}
        <MenuItem setActive={setActive} active={active} item="Company">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      <ThemeToggle />
    </motion.div>
  );
}

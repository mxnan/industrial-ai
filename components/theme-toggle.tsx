"use client";
import React from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="size-[1.2rem] text-black dark:hidden dark:text-white" />
      <MoonIcon className="hidden size-[1.2rem] text-black dark:block dark:text-white" />
    </Button>
  );
};

export default Theme;

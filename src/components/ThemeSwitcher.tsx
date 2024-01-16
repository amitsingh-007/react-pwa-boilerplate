"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useMount } from "react-use";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useMount(() => setMounted(true));

  if (!mounted) {
    return null;
  }

  return (
    <Switch
      isSelected={theme === "dark"}
      onValueChange={(isSelected) => setTheme(isSelected ? "dark" : "light")}
      size="lg"
      color="success"
      startContent={<RiSunFill />}
      endContent={<RiMoonFill />}
    />
  );
};

export default ThemeSwitcher;

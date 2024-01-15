import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

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

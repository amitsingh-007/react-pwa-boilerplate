import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import dynamic from "next/dynamic";

const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), {
  ssr: false,
});

const AppNavBar = () => (
  <Navbar isBordered>
    <NavbarBrand>
      <p className="font-bold text-inherit">React PWA Boilerplate</p>
    </NavbarBrand>
    <NavbarContent justify="end">
      <NavbarItem>
        <ThemeSwitcher />
      </NavbarItem>
    </NavbarContent>
  </Navbar>
);

export default AppNavBar;

import { classNames } from "shared/lib/helpers/classnames/classnames";
import cls from "./navbar.module.scss";
import { ThemeSwitcher } from "shared/themeSwitcher/ui/themeSwitcher";
import { AppLink } from "shared/ui/appLink/appLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(className, {}, [cls.navbar])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink to={"/about"}>about</AppLink>
        <AppLink to={"/"}>main</AppLink>
      </div>
    </div>
  );
};

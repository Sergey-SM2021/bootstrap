import { classNames } from "shared/lib/helpers/classnames/classnames";
import cls from "./navbar.module.scss";
import { AppLink, linkTheme } from "shared/ui/appLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(className, {}, [cls.navbar])}>
      <div className={cls.links}>
        <AppLink to={"/about"}>about</AppLink>
        <AppLink to={"/"}>main</AppLink>
      </div>
    </div>
  );
};

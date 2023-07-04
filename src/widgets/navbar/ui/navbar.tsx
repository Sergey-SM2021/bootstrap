import { classNames } from "shared/lib/helpers/classNames/classNames"
import cls from "./navbar.module.scss"

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

	return (
		<div className={classNames(className, {}, [cls.navbar])} />
	)
}

import { classNames } from "shared/lib/helpers/classNames/classNames"
import cls from "./navbar.module.scss"
import { AppLink } from "shared/ui/appLink/appLink"
import { useTranslation } from "react-i18next"

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames(className, {}, [cls.navbar])}>
			<div className={cls.links}>
				<AppLink to={"/about"}>{t("about link")}</AppLink>
				<AppLink to={"/"}>{t("home link")}</AppLink>
			</div>
		</div>
	)
}

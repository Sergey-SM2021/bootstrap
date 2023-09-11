import { AppLink } from "shared/ui/appLink"
import logo from "./Logo.module.scss"
import { GetRouter } from "shared/const/router"

export const Logo = () => {
	// eslint-disable-next-line
  return <AppLink to={GetRouter.Home()} className={logo.Logo}>Sergey's blog</AppLink>;
}

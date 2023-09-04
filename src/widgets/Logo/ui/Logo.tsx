import { RouterPaths } from "shared/config/routerConfig/RouterConfig"
import { AppLink } from "shared/ui/appLink"
import logo from "./Logo.module.scss"

export const Logo = () => {
	// eslint-disable-next-line
  return <AppLink to={RouterPaths.home} className={logo.Logo}>Sergey's blog</AppLink>;
}

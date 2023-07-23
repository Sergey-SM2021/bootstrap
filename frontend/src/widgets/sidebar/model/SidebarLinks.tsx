import About from "widgets/sidebar/assets/Description.svg"
import Home from "widgets/sidebar/assets/Home.svg"
import { RouterPaths } from "shared/config/routerConfig/RouterConfig"
import Profile from "widgets/sidebar/assets/profile.svg"

export const links = [
	{ Icon: About, path: RouterPaths.about, text: "about link" },
	{ Icon: Home, path: RouterPaths.home, text: "home link" },
	{ Icon: Profile, path: RouterPaths.profile, text: "profile" },
]

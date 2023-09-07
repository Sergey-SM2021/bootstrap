import About from "widgets/sidebar/assets/Description.svg"
import Home from "widgets/sidebar/assets/Home.svg"
import { RouterPaths } from "shared/config/routerConfig/RouterConfig"
import Profile from "widgets/sidebar/assets/Profile.svg"
import Article from "widgets/sidebar/assets/Article.svg"
import { createSelector } from "@reduxjs/toolkit"
import { getUserId } from "entity/user/model/selector/getUserSelector"

export const LinksSelector = createSelector(
	getUserId,
	(userId: string | undefined) => [
		{ Icon: About, path: RouterPaths.about, text: "about link", priv: false },
		{ Icon: Home, path: RouterPaths.home, text: "home link", priv: false },
		{
			Icon: Profile,
			path: `${RouterPaths.profile}${userId}`,
			text: "profile",
			priv: true,
		},
		{
			Icon: Article,
			path: RouterPaths.articles,
			text: "articles",
			priv: true,
		},
	]
)

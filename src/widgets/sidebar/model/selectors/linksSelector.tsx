import About from "widgets/sidebar/assets/Description.svg"
import Home from "widgets/sidebar/assets/Home.svg"
import Profile from "widgets/sidebar/assets/Profile.svg"
import Article from "widgets/sidebar/assets/Article.svg"
import { createSelector } from "@reduxjs/toolkit"
import { getUserId } from "entity/user/model/selector/getUser"
import { GetRouter } from "shared/const/router"

export const LinksSelector = createSelector(
	getUserId,
	(userId: string | undefined) => [
		{ Icon: About, path: GetRouter.About(), text: "about link", priv: false },
		{ Icon: Home, path: GetRouter.Home(), text: "home link", priv: false },
		{
			Icon: Profile,
			path: GetRouter.Profile(userId as string),
			text: "profile",
			priv: true,
		},
		{
			Icon: Article,
			path: GetRouter.Articles(),
			text: "articles",
			priv: true,
		},
	]
)

import About from "../../assets/Description.svg"
import Home from "../../assets/Home.svg"
import Profile from "../../assets/Profile.svg"
import Article from "../../assets/Article.svg"
import { createSelector } from "@reduxjs/toolkit"
import { getUserId } from "entity/user"
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

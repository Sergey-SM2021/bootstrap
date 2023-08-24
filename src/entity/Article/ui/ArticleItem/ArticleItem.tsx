import {
	Article,
	ArticleTextBlock,
	ArticleType,
} from "entity/Article/model/types/Article"
import { memo } from "react"
import clx from "./ArticleItem.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import { useNavigate } from "react-router-dom"
import { Flex } from "shared/ui/Flex/Flex"
import { Text, TextSize } from "shared/ui/Text/Text"
import Views from "shared/assets/views.svg"
import { Icon } from "shared/ui/icon/Icon"
import { useTranslation } from "react-i18next"
import { useHover } from "shared/lib/hooks/useHover"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Avatar } from "shared/ui/avatar/avatar"
import { ArticleParagraph } from "../ArticleParagraph/ArticleParagraph"

interface ArticleItemProps extends Article {
  mode: "big" | "small";
}

export const ArticleItem = memo((props: ArticleItemProps) => {
	const { mode, createdAt, title, img, label, views, blocks, user, id } = props
	const nav = useNavigate()
	const { isHover, ...hover } = useHover()
	const { t } = useTranslation()

	const handlerNavigate = () => {
		nav(`/article/${id}`)
	}

	const ViewsCount = (
		<Flex align="center" gap={8}>
			{views}
			<Icon size="xs">
				<Views />
			</Icon>
		</Flex>
	)

	const handlerNavigateOnUser = () => {
		nav(`/profile/${user.id}`)
	}

	if (mode === "big") {
		const text = blocks.find(
			(el) => el.type === ArticleType.TEXT
		) as ArticleTextBlock

		return (
			<div className={classNames(clx.big, {}, [clx.card])}>
				<Flex direction="column" gap={8} className={clx.header}>
					<Flex justify="space-between" align="center">
						<Flex align="center" gap={16} className={clx.UserLink} onClick={handlerNavigateOnUser}>
							<Avatar size="xs" src={user.avatar} />
							<Text>{user.nickname}</Text>
						</Flex>
						<div>{createdAt}</div>
					</Flex>
					<Text size={TextSize.lg}>{title}</Text>
					<p className={clx.labels}>{label.join(", ")}</p>
				</Flex>
				<div className={clx.img} style={{ backgroundImage: `URL(${img})` }} />
				<ArticleParagraph block={text} className={clx.content} />
				<Flex justify="space-between" align="center" className={clx.footer}>
					<AppButton onClick={handlerNavigate} theme={AppButtonTheme.primary}>
						{t("read more")}
					</AppButton>
					{ViewsCount}
				</Flex>
			</div>
		)
	}

	return (
		<div
			className={classNames(clx.small, { [clx.hovered]: isHover }, [clx.card])}
			{...hover}
		>
			<div className={clx.content} style={{ backgroundImage: `url(${img})` }}>
				<div className={clx.createdAt}>{createdAt}</div>
			</div>
			<div className={clx.footer}>
				<Flex gap={16} align="center">
					<p className={clx.labels}>{label.join(", ")}</p>
					{ViewsCount}
				</Flex>
				<Text size={TextSize.lg}>{title}</Text>
				<div className={clx.readTheText} onClick={handlerNavigate}>
					{t("read more")}
				</div>
			</div>
		</div>
	)
})

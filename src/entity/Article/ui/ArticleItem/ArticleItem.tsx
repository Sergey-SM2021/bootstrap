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

interface ArticleItemProps extends Article {
  mode: "big" | "small";
  avatar: string;
  username: string;
}

export const ArticleItem = memo((props: ArticleItemProps) => {
	const {
		mode,
		createdAt,
		title,
		img,
		label,
		views,
		blocks,
		avatar,
		username,
	} = props
	const nav = useNavigate()
	const { isHover, ...hover } = useHover()
	const { t } = useTranslation()

	const handlerNavigate = () => {
		nav("/")
	}

	const ViewsCount = (
		<Flex align="center" gap={8}>
			{views}
			<Icon size="xs">
				<Views />
			</Icon>
		</Flex>
	)

	if (mode === "big") {
		const text = blocks.find(
			(el) => el.type === ArticleType.TEXT
		) as ArticleTextBlock

		return (
			<div className={classNames(clx.big, {}, [clx.card])}>
				<Flex direction="column" gap={8} className={clx.header}>
					<Flex justify="space-between" align="center">
						<Flex align="center" gap={16}>
							<Avatar size="xs" src={avatar} />
							<Text>{username}</Text>
						</Flex>
						<div>{createdAt}</div>
					</Flex>
					<Text size={TextSize.lg}>{title}</Text>
					<p className={clx.labels}>{label.join(", ")}</p>
				</Flex>
				<div className={clx.img} style={{ backgroundImage: `URL(${img})` }} />
				{text.paragraphs.map((el, index) => (
					<p key={index} className={clx.paragraph}>
						{el}
					</p>
				))}
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

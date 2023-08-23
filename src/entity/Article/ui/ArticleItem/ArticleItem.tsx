import { Article } from "entity/Article/model/types/Article"
import { memo } from "react"
import clx from "./ArticleItem.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import { useNavigate } from "react-router-dom"
import { Flex } from "shared/ui/Flex/Flex"
import { Text, TextSize } from "shared/ui/Text/Text"
import Views from "shared/assets/views.svg"
import { Icon } from "shared/ui/icon/Icon"
import { useTranslation } from "react-i18next"

interface ArticleItemProps extends Article {
  mode: "big" | "small";
}

export const ArticleItem = memo((props: ArticleItemProps) => {
	const { mode, createdAt, title, img, label, views } = props
	const nav = useNavigate()
	const { t } = useTranslation()

	const handlerNavigate = () => {
		nav("/")
	}

	if (mode === "big") {
		return <div className={classNames(clx.big, {}, [clx.card])}></div>
	}

	return (
		<div className={classNames(clx.small, {}, [clx.card])}>
			<div className={clx.content} style={{ backgroundImage: `url(${img})` }}>
				<div className={clx.createdAt}>{createdAt}</div>
			</div>
			<div className={clx.footer}>
				<Flex gap={16} align="center">
					<p className={clx.labels}>{label.join(", ")}</p>
					<Flex align="center" gap={8}>
						{views}
						<Icon size="xs">
							<Views />
						</Icon>
					</Flex>
				</Flex>
				<Text size={TextSize.lg}>{title}</Text>
				<div className={clx.readTheText} onClick={handlerNavigate}>
					{t("read more")}
				</div>
			</div>
		</div>
	)
})

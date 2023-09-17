import { memo } from "react"
import { Text } from "shared/ui/Text/Text"
import { useTranslation } from "react-i18next"
import { Virtuoso, VirtuosoGrid } from "react-virtuoso"
import clx from "./ArticleList.module.scss"
import {
	ArticleLabel,
	ArticleType
} from "entity/ArticleDetalis"
import { ArticleItemSkeleton } from "../ArticleItem/ArticleItemSkeleton"
import { ArticleItem } from "../ArticleItem/ArticleItem"

interface ArticleListProps {
  articles: ArticleType[];
  mode: "big" | "small";
  isLoading: boolean;
  className?: string;
  endReached?: VoidFunction;
  hasMore?: boolean;
  virtual?: boolean;
  saveScroll?: boolean;
}

export const ArticleList = memo((props: ArticleListProps) => {
	const { articles, mode, endReached, isLoading } = props
	const { t } = useTranslation()

	if (!articles) {
		return (
			<div>
				<Text>{t("empty articles")}</Text>
			</div>
		)
	}

	if (mode === "small") {
		return (
			<VirtuosoGrid
				style={{ height: "100%", width: "100%" }}
				data={articles}
				endReached={endReached}
				itemClassName={clx.Item}
				listClassName={clx.List}
				components={{
					Footer: () =>
						isLoading ? (
							<div className={clx.List}>
								{new Array(3).fill(<ArticleItemSkeleton mode={mode} />)}
							</div>
						) : null,
				}}
				itemContent={(index, element) => (
					<div style={{ paddingBottom: "16px" }}>
						<ArticleItem
							mode={mode}
							key={index}
							{...element}
							label={[ArticleLabel.ECONOMICS]}
						/>
					</div>
				)}
			/>
		)
	}

	return (
		<Virtuoso
			style={{ height: "100%", width: "100%" }}
			data={articles}
			endReached={endReached}
			itemContent={(index, element) => (
				<div style={{ paddingBottom: "16px" }}>
					<ArticleItem
						mode={mode}
						key={index}
						{...element}
						label={[ArticleLabel.ECONOMICS]}
					/>
				</div>
			)}
			components={{
				Footer: () =>
					isLoading ? (
						<ArticleItemSkeleton mode={mode} />
					) : (
						<div>{t("articles not found")}</div>
					),
			}}
		/>
	)
})

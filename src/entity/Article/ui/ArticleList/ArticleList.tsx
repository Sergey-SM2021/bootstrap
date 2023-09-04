import { memo } from "react"
import { Text } from "shared/ui/Text/Text"
import { useTranslation } from "react-i18next"
import { Virtuoso, VirtuosoGrid } from "react-virtuoso"
import clx from "./ArticleList.module.scss"
import { Article, ArticleLabel } from "entity/ArticleDetalis/model/types/Article"
import { ArticleItemSkeleton } from "entity/ArticleDetalis/ui/ArticleItem/ArticleItemSkeleton"
import { ArticleItem } from "entity/ArticleDetalis/ui/ArticleItem/ArticleItem"

interface ArticleListProps {
  articles: Article[];
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

	if (!articles.length) {
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
					Footer: () => (
						<div className={clx.List}>
							{isLoading
								? new Array(3).fill(<ArticleItemSkeleton mode={mode} />)
								: null}
						</div>
					),
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
					// eslint-disable-next-line
            <div>Больше нет статей</div>
					),
			}}
		/>
	)
})

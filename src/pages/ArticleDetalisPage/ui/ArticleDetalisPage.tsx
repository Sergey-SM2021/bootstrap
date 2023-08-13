import {Article} from "entity/Article"
import {CommentList} from "entity/Comment"
import {memo, useEffect} from "react"
import {useTranslation} from "react-i18next"
import {useParams} from "react-router-dom"
import clx from "./ArticleDetalisPage.module.scss"
import {Citys} from "entity/City/model/types/CitySchema"
import {Country, Currency} from "shared/const/common"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {setComments} from "../model/slice/ArticleDetalisComments"
import {AsyncComponent} from "shared/lib/AsyncComponent/AsyncComponent"
import {reducer} from "../model/slice/ArticleDetalisComments"
import {selectors} from "../model/slice/ArticleDetalisComments"
import {useSelector} from "react-redux"

const ArticleDetalisPage = memo(() => {
	const {id} = useParams()
	const {t} = useTranslation("articlePage")
	const dispatch = useAppDispatch()

	const {selectAll} = selectors
	const comments = useSelector(selectAll)

	useEffect(()=>{
		dispatch(setComments({id: "78", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet, odio vitae egestas dictum, purus orci egestas urna, a blandit ipsum ipsum nec dui. Nam fermentum diam felis, eu egestas elit suscipit eget. Maecenas a pulvinar eros, id porttitor massa. Etiam accumsan molestie neque vel sagittis. Curabitur sapien lorem, congue ac dui vel, tincidunt fringilla ipsum. Quisque ultrices ultrices mattis. Praesent vitae sapien sodales, tempus purus non, vulputate mauris. Cras turpis dui, accumsan at tincidunt bibendum, ultrices sed ex. Nullam euismod mauris et sem luctus, eget laoreet felis aliquet. Maecenas vestibulum semper semper. Phasellus luctus libero nisl, non molestie velit efficitur non. Aliquam erat volutpat. Vivamus lectus quam, ullamcorper eget augue sed, dignissim mattis sem. Quisque tincidunt aliquam mauris, dapibus lobortis est volutpat non. ", user: {
			age:56,
			avatar: "https://imgix.bustle.com/uploads/image/2021/6/7/2e03dd6b-4fa2-4d81-b929-f3d1e48d27ee-loki2.jpg?w=400&h=400&fit=crop&crop=faces&auto=format%2Ccompress",
			city:Citys.Delhi,
			lastname:"uiygb",
			nikname:"Скрытный убийца 666",
			country:Country.Mexico,
			currency:Currency.RUB,
			name:"appolo"
		}}))
		// eslint-disable-next-line
	},[])

	if (!id) {
		return <div>
			{t("article not found")}
		</div>
	}

	return (
		<AsyncComponent reducerName={"ArticleDetalisPage"} reducer={reducer}>
			<div className={clx.article}>
				<Article id={Number(id)}/>
				<CommentList comments={comments} isLoading={false}/>
			</div>
		</AsyncComponent>
	)
})

export default ArticleDetalisPage

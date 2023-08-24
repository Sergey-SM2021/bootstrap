import type { Meta, StoryObj } from "@storybook/react"
import { ArticleItem } from "./ArticleItem"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { ArticleLabel, ArticleType } from "entity/Article/model/types/Article"
import img from "shared/assets/assasyn.jpg"

const meta: Meta<typeof ArticleItem> = {
	title: "Entity/ArticleItem",
	component: ArticleItem,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ArticleItem>;

export const Small: Story = {
	args: {
		label: [
			ArticleLabel.IT,
			ArticleLabel.ECONOMICS,
			ArticleLabel.MEDICINE,
			ArticleLabel.ECONOMICS,
		],
		mode: "small",
		createdAt: "01.29.3210",
		img,
		title: "Assasyn creed valhalla",
		views: 210,
	},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}

export const Big: Story = {
	args: {
		label: [
			ArticleLabel.IT,
			ArticleLabel.ECONOMICS,
			ArticleLabel.MEDICINE,
			ArticleLabel.ECONOMICS,
		],
		mode: "big",
		createdAt: "01.29.3210",
		img,
		title: "Assasyn creed valhalla",
		views: 210,
		blocks: [
			{
				id: 1,
				type: ArticleType.TEXT,
				title: "Заголовок этого блока",
				paragraphs: [
					"Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
					"JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
					"Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
				],
			},
		],
		user: {
			avatar: img,
			nickname: "super-mega-user",
			id: 12,
		},
	},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}

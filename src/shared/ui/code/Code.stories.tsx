import type { Meta, StoryObj } from "@storybook/react"
import { Code } from "./Code"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof Code> = {
	title: "Shared/Code",
	component: Code,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Code>;


export const Primary: Story = {
	args: {
		children: `generator client {
            provider = "prisma-client-js"
          }
          
          datasource db {
            // !
            provider = "sqlite"
            url      = env("DATABASE_URL")
          }
          
          // модель пользователя
          model User {
            id        String  @id @default(uuid())
            username  String?
            avatarUrl String?
            email     String  @unique
            password  String
            posts     Post[]
            likes     Like[]
          }
          // модель поста
          model Post {
            id        String   @id @default(uuid())
            title     String
            content   String
            author    User     @relation(fields: [authorId], references: [id], onUpdate: Cascade, onDelete: Cascade)
            authorId  String
            likes     Like[]
            createdAt DateTime @default(now())
            updatedAt DateTime @updatedAt
            // уникальное сочетание полей, используемое для обновления и удаления записи
            @@unique([id, authorId])
          }
          // модель лайка
          model Like {
            id     String @id @default(uuid())
            user   User   @relation(fields: [userId], references: [id])
            userId String
            post   Post   @relation(fields: [postId], references: [id], onUpdate: Cascade, onDelete: Cascade)
            postId String
          
            @@unique([id, userId, postId])
          }`
	},
	decorators: [ThemeDecorator(Theme.CustomTheme)],
}
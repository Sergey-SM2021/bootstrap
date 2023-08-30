import { Tag } from "./Tag"

export interface TagSchema {
    isLoading: boolean;
    tags: Tag[]
    error?: string
}
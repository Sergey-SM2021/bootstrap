import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const getNewCommentText = (state: StoreSchema) =>
	state.articleComments?.newCommentText ?? ""

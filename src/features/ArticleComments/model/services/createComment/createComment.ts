import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

import { CommentType } from "entity/Comment"

import { $api } from "shared/api/api"

import { createAsyncThunk } from "@reduxjs/toolkit"

export const CreateCommentAsync = createAsyncThunk<
  CommentType,
  string,
  { extra: { api: typeof $api }; state: StoreSchema }
>(
  "Create comment slice",
  async (text, { extra: { api }, getState, rejectWithValue }) => {
    try {
      return (
        await api.post("comment", {
          articleId: getState().ArticleReducer?.data?.id,
          text,
        })
      ).data
    } catch (error) {
      return rejectWithValue("error")
    }
  },
)

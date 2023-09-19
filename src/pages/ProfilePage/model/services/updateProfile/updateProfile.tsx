import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

import { $api } from "shared/api/api"

import { selectEditedProfile } from "../../selectors/ProfilePageSelectors"
import { actions } from "../../slice/profileSlice/profileSlice"
import { Profile, ProfileErrors } from "../../types/ProfileSchema"
import { validateProfile } from "../validateProfile/validateProfile"

import { createAsyncThunk } from "@reduxjs/toolkit"

type ReturnedType = any

export const updateProfile = createAsyncThunk<
  ReturnedType,
  void,
  {
    extra: { api: typeof $api }
    state: StoreSchema
    rejectValue: ProfileErrors[]
  }
>(
  "profile/update",
  async (params, { extra: { api }, rejectWithValue, getState, dispatch }) => {
    const profile = selectEditedProfile(getState())
    const errors = validateProfile(profile as Profile)
    if (errors.length) {
      return rejectWithValue(errors)
    }
    try {
      const response = await api.put("user/3", profile)
      dispatch(actions.toggleReadOnly())
      return response
    } catch (error) {
      return rejectWithValue([...errors, ProfileErrors.ServerError])
    }
  },
)

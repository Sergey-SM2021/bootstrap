export interface User {
    login: string
    id: number
}

export interface UserSchema {
  authData?: User
}
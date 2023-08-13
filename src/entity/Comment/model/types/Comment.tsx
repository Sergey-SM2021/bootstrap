import { Profile } from "pages/ProfilePage/model/types/ProfileSchema"

export interface Comment {
    id: string 
    user: Profile
    text: string   
}
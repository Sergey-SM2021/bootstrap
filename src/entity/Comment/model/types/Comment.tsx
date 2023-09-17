import { Profile } from "pages/ProfilePage"

export interface Comment {
    id: string 
    user: Profile
    text: string   
}
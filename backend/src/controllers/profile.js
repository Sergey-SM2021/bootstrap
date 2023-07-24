import { ProfileService } from "../servicecs/profile.js";

class Profile {
  async getProfile(req, res) {
    const id = req.query.id
    const data = await ProfileService.getProfile(id);
    res.send(data);
  }
}

export const ProfileController = new Profile();

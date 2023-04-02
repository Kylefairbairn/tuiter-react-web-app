import { createSlice } from "@reduxjs/toolkit";

const currentUser = {
  firstName: "Elon",
  lastName: "Musk",
  handle: "@elonmusk",
  profilePicture: "elon-profile.jpg",
  bannerPicture: "download.jpg",
  bio: "Chief Tweeting Officer of Tesla",
  website: "elon.com",
  location: "Austin, TX",
  dateOfBirth: "South Africa",
  dateJoined: "2011-09-01",
  followingCount: 1,
  followersCount: 1000000,
  tuitCount: 6114,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: currentUser,
  reducers: {
    updateProfile(state, action) {
      const updatedProfile = action.payload;
      let [firstName, ...lastName] = updatedProfile.name.split(" ");
      lastName = lastName.join(" ");
      const bio = updatedProfile.bio;
      const location = updatedProfile.location;
      const website = updatedProfile.website;
      const [year, month, day] = updatedProfile.birthday.split("-");
      const dateOfBirth = [month, day, year].join("/");
      return {
        ...state,
        firstName,
        lastName,
        bio,
        location,
        website,
        dateOfBirth,
      };
    },
  },
});
export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
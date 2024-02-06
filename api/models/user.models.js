import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://www.bing.com/images/search?view=detailV2&ccid=GHGGLYe7&id=203A81A51E21F9EC418A806CE1E50DB226AD5D00&thid=OIP.GHGGLYe7gDfZUzF_tElxiQHaHa&mediaurl=https%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fProfile.png&exph=1200&expw=1200&q=profile+icon&simid=608027336668549634&FORM=IRPRST&ck=415AF21371F6346F72E6674E068EE1B4&selectedIndex=11&itb=1",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

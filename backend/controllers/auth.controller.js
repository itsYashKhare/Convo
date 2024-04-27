import User from "../models/userModel.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password != confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    const user = await User.findone({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // HASH PASSWPD HERE

    // https://avatar-placeholder.iran.liara.run/;

    const boyProfilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic: gender === "male" ? boyProfilepic : girlProfilepic,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilepic: newUser.profilePic
      
    });

  } catch (err) {
    console.log("Error in signup controller" , err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = (req, res) => {
  res.send("Login page");
  console.log("Login");
};

export const logout = (req, res) => {
  res.send("Logout page");
  console.log("Logout");
};


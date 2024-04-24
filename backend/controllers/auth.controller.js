 
export const signup = async (req, res) => {
  try {
    const {fullName,username,password,confirmPassword,gender} = req.body;
  } catch (err) {
    
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

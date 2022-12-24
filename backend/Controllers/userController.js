const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(
      new Error("Please provide a name, email, and password to register", 400)
    );
  }
  return res.send("Registering a user");
};

const loginUser = async (req, res) => {
  return res.send("Logging in a user");
};

module.exports = {
  registerUser,
  loginUser,
};

import User from "../models/User.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  const { email, fname, lname, password, organization } = req.body;
  try {
    const existingUser = await new User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exist." });
    }

    const salt = await bcrypt.genSalt();

    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      fname,
      lname,
      password: hashPassword,
      organization,
    });
    newUser.save();
    res.status(200).json({ message: "User registered Successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ message: "User Does not exist" });

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck)
      return res.status(400).json({ message: "Invalid Password" });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { register, login };

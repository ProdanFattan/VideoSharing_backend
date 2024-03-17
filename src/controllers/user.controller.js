import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "This is the user registration route" });
});

export { registerUser };

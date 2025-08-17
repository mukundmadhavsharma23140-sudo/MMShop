import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },               // Payload (data inside token)
    process.env.JWT_SECRET,       // Secret key (stored securely in .env file)
    { expiresIn: "7d" }           // Token validity (here: 7 days)
  );
};

export default generateToken;

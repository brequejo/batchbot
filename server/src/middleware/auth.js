import jwt from "jsonwebtoken";

import { TOKEN_KEY } from "../../env.js";

const verifyToken = (req, res, next) => {
  const token = req.cookies.batchbot;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken;

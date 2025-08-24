import { RequestHandler } from "express";
import { SignupRequest, SignupResponse, LoginRequest, LoginResponse } from "@shared/api";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// In-memory user store (for demo only)
const users: { [email: string]: { email: string; passwordHash: string } } = {};

export const handleSignup: RequestHandler = async (req, res) => {
  const { email, password } = req.body as SignupRequest;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }
  if (users[email]) {
    return res.status(409).json({ error: "User already exists" });
  }
  const passwordHash = await bcrypt.hash(password, 10);
  users[email] = { email, passwordHash };
  return res.json({ success: true });
};

export const handleLogin: RequestHandler = async (req, res) => {
  const { email, password } = req.body as LoginRequest;
  const user = users[email];
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  // Sign JWT
  const token = jwt.sign({ email }, process.env.JWT_SECRET || "devsecret", { expiresIn: "1h" });
  return res.json({ token });
};

import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
    verifyToken(req,res,next, () => {
    if (req.user.id === req.params.id) {
        next();
    } 
    else {
        console.log("çalıştı");
        return next(createError(403, "Kullanıcı getirilemedi hatalı id!"));
    }

  });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req,res,next, () => {
    if (req.user.isAdmin) {
        next();
    } 
    else {
        console.log(req.user.isAdmin);
        return next(createError(403, "admin gelemedi id!"));
    }

  });
};

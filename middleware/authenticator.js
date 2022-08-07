exports.authenticatateJWT = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (bearer.startsWith("Bearer ")) {
    const bearerToken = bearer.split("Bearer ")[1];

    if (!bearerToken) {
      return res.status(401).json({
        errorMessage: "No token, Authorization denied!",
      });
    } else {
      req.token = bearerToken;
      next();
    }
  }
};

// try {
//   if (authHeader.startsWith("Bearer ")) {
//     const token = authHeader.split("Bearer ")[1];

//     if (token) {
//       const decoded = jwt.verify(token, jwtSecret);

//       req.user = decoded.user;
//       next();
//     } else {
//       return res.status(401).json({
//         errorMessage: "No token, Authorization denied!",
//       });
//     }
//   }
// } catch (err) {}

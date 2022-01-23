const admin = (req, res, next) => {
  if (req.body.role === "admin") {
    return next();
  } else res.send("not allowed");
};
module.exports = admin;

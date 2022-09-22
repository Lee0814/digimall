//常量
const USERNAME_DOSE_NOT_EXISTS = "USERNAME_DOSE_NOT_EXISTS";
const USENAME_ALREADY_EXISTS = "USENAME_ALREADY_EXISTS";
const NAME_OR_PASSWORD_IS_REQUIRED = "NAME_OR_PASSWORD_IS_REQUIRED";
const PASSWORD_ERROR = "PASSWORD_ERROR";
const UNAUTHORIZATION = "UNAUTHORIZATION";

const errorMiddleware = function (err, req, res, next) {
  let status = 400;
  let message = "";
  switch (err.message) {
    case USERNAME_DOSE_NOT_EXISTS:
      message = "用户不存在";
      break;
    case USENAME_ALREADY_EXISTS:
      message = "用户已经存在";
      break;
    case NAME_OR_PASSWORD_IS_REQUIRED:
      message = "用户或密码不能为空";
      break;
    case PASSWORD_ERROR:
      message = "密码错误";
      break;
    case UNAUTHORIZATION:
      message = "token无效";
      break;
    default:
      message = "not found";
  }
  res.status(status);
  res.json({
    errCode: status,
    errMessage: message,
    success: false,
  });
};
module.exports = errorMiddleware;

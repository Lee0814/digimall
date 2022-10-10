const express = require("express");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

//导入路由
const loginRouter = require("./src/router/login");
const registRouter = require("./src/router/register");
const goodsRouter = require("./src/router/goods");
const profileRouter = require("./src/router/profile");
const logoutRouter = require("./src/router/logout");

app.use((req, res, next) => {
  res.cc = (message, status = 1) => {
    res.send({
      status,
      message,
    });
  };
  next();
});

//中间件判断是否携带token

const regToken = require("./src/middleware/common/reg_token");

//使用内置函数解析json
app.use(cookieParser());
app.use(cors());
app.use("/profile", profileRouter);
app.use("/login", loginRouter);
app.use("/register", registRouter);
app.use("/", goodsRouter);
app.use("/logout", logoutRouter);
// token验证中间件
// app.use(regToken);

//定义错误中间件
const errorMiddleware = require("./src/middleware/common/error_middleware.js");
app.use(errorMiddleware);
//开启监听
app.listen(8000, () => {
  console.log("express");
});

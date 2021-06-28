import express, { Router } from "express";

const options: express.RouterOptions = {
  caseSensitive: true,
  strict: true,
};

const router: express.Router = express.Router(options);

router.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("Time: ", Date.now());
    console.log("From Middleware");
    next();
  }
);

router.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("From Route /");
    res.send("Home");
  }
);

router.get(
  "/notHome",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("From Route /notHome");

    res.send("Not home");
  }
);

export default router;

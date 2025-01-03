// express
import express, { Express } from "express";
const app: Express = express();

// npm modules
import cors from "cors";

// route imports
import errorRoutes from "./routes/error";
import userRoutes from "./routes/user";

// middleWears
app.use(express.json());
app.use(cors());

// route MiddleWears
app.use("/api", userRoutes);
app.use("*", errorRoutes);

app.listen(8080, () => console.log("Server is running on port 8080"));

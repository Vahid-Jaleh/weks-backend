import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true, service: "weks-backend" }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("WEKS backend running on", PORT));

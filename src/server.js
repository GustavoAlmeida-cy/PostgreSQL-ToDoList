import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Define __filename and __dirname for ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../public")));

// Serve static files from the 'src/app' directory
app.use(express.static(path.join(__dirname, "app")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "app", "index.html"));
});

app.listen(PORT, () => {
  console.log(
    `[express] Server is running on http://localhost:${PORT}/` + "\n"
  );
});

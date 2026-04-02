const express = require("express");
const cors = require("cors");
const cartRoutes = require("./routes/cart");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/cart", cartRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

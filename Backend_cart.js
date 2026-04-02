const express = require("express");
const router = express.Router();

let cart = [];

router.get("/", (req, res) => {
  res.json(cart);
});

router.post("/add", (req, res) => {
  const product = req.body;
  const index = cart.findIndex(p => p.id === product.id);

  if (index !== -1) {
    cart[index].cantidad += product.cantidad;
  } else {
    cart.push(product);
  }

  res.json({ mensaje: "Producto agregado", carrito: cart });
});

router.delete("/clear", (req, res) => {
  cart = [];
  res.json({ mensaje: "Carrito vaciado" });
});

module.exports = router;

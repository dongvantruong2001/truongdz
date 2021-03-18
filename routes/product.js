import express from "express";

const router = express.Router();
router.get("/product", (req, res) => {
  console.log("list product ");
  res.json({
    hello: "Thanh cong",
  });
});
module.exports = router;

// products detail
router.get("/product/id", (req, res) => {
  res.json({
    id: req.params.id,
    name: "Product 1",
  });
});

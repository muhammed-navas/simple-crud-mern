import express from "express";
import  { authenticate, isAdmin } from "../middleware/authMiddleware.js";
import  {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const ProductRouter = express.Router();

ProductRouter.get("/", getAllProducts);
ProductRouter.post("/", createProduct);
ProductRouter.put("/:id", updateProduct);
ProductRouter.delete("/:id", deleteProduct);

export default ProductRouter;

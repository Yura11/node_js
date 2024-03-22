import express from "express";
import {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";

const router = express.Router();

// GET all products
router.get('/', getAllProducts);

// GET a product by ID
router.get('/:id', getProductById);

// POST create a new product
router.post('/', createProduct);

// PUT update a product by ID
router.put('/:id', updateProduct);

// DELETE delete a product by ID
router.delete('/:id', deleteProduct);

export default router;

import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json({
            message: "Product Created",
            product: newProduct
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const [updatedCount] = await Product.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedCount === 0) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product Updated" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const deletedCount = await Product.destroy({
            where: { id: req.params.id }
        });
        if (deletedCount === 0) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product Deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

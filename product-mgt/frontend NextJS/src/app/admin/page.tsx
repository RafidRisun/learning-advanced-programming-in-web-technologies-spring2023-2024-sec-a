import { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  pname: string;
  description: string;
}

const AdminPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [newProduct, setNewProduct] = useState({ pname: '', description: '' });
    const [updateProduct, setUpdateProduct] = useState({ id: null, pname: '', description: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get<Product[]>('http://localhost:3001/product');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const deleteProduct = async (productId: number) => {
        try {
            await axios.delete(`http://localhost:3001/product/${productId}`); 
            fetchProducts(); 
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const addProduct = async () => {
        try {
            await axios.post('http://localhost:3001/product/product', newProduct);
            setNewProduct({ pname: '', description: '' });
            fetchProducts();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const updateProductById = async () => {
        try {
            await axios.put(`http://localhost:3001/product/${updateProduct.id}`, updateProduct);
            setUpdateProduct({ id: null, pname: '', description: '' });
            fetchProducts();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProduct(prevState => ({ ...prevState, [name]: value }));
    };

    const handleUpdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdateProduct(prevState => ({ ...prevState, [name]: value }));
    };

    const startUpdate = (product: Product) => {
        setUpdateProduct({ id: product.id, pname: product.pname, description: product.description });
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <section>
                <h2>Add Product</h2>
                <div>
                    <label>Product Name: </label>
                    <input type="text" name="pname" value={newProduct.pname} onChange={handleChange} />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" name="description" value={newProduct.description} onChange={handleChange} />
                </div>
                <button onClick={addProduct}>Add Product</button>
            </section>
            <hr />
            <section>
                <h2>Update Product</h2>
                <div>
                    <label>Product Name: </label>
                    <input type="text" name="pname" value={updateProduct.pname} onChange={handleUpdateChange} />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" name="description" value={updateProduct.description} onChange={handleUpdateChange} />
                </div>
                <button onClick={updateProductById}>Update Product</button>
            </section>
            <hr />
            <section>
                <h2>Products</h2>
                <ul>
                    {products.map((product: Product) => (
                        <li key={product.id}>
                            <span>{product.pname}</span>
                            <button onClick={() => deleteProduct(product.id)}>Delete</button>
                            <button onClick={() => startUpdate(product)}>Update</button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default AdminPage;

import { fakeStoreAPI } from "/fakeStoreService";

export const getProducts = async () => {
    try {
        const response = await fakeStoreAPI.get("/products");
        return response.data;
    }

    catch (error) {
    console.log(error.response.data.message)
    }
};

export const getProductByID = async (product_ID) => {
    try {
        const response = await fakeStoreAPI.get (`/products/${product_ID}`);
        return response.data;
    }
    catch (error) {

    console.log(error.response.data.message);

    }
};

export const createProduct = async (data) => {
    try {
        const response = await fakeStoreAPI.post("/products", data);
        return response.data;
    } catch (error) {
        console.log(error.resonse.data.message);
    }
}

export const deleteProduct = async (product_ID) => {
    try {
        const response = await fakeStoreAPI.delete (`/products/${product_ID}`);
        return response.data;
    }
    catch (error) {

    console.log(error.response.data.message);

    }
};
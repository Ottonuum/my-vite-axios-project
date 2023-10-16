import {
  getProducts,
  getProductByID,
  createProduct,
  deleteProduct,

} from "/fakeStoreQueries";

await getProducts();

await getProductByID(1);

await createProduct ({
  title: "test product",
  price: 13.5,
  description: "Lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic"
})

await deleteProduct(20);
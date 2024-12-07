import axios from "axios";
import React, { ComponentType, useEffect, useState } from "react";

type ProductsDisplayType = {
   url: string;
   displayProducts: (products: any[]) => JSX.Element;
};

const ProductsDisplay = ({ url, displayProducts }: ProductsDisplayType) => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const response = await axios.get(url);
            setProducts(response.data.products);
         } catch (error) {
            setProducts([]);
         }
      };

      fetchProducts();
   }, [url]);
   return products ? displayProducts(products) : <div>No Products found</div>;
};

export default ProductsDisplay;

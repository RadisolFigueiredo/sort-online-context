import { createContext, ReactNode, useState } from 'react';

type ProductType = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  priceDiscount: number;
};

interface ProductContextType {
  products: ProductType[];
  addProduct: (product: ProductType) => void;
  removeProduct: (productId: number) => void;
}

interface PropsProductContext {
  children: ReactNode;
}

const initialState: ProductType[] = [];

const ProductContext = createContext<ProductContextType>({
  products: initialState,
  addProduct: (product: ProductType) => {},
  removeProduct: (productId: number) => {},
});

const ProductContextProvider = ({ children }: PropsProductContext) => {
  const [products, setProduct] = useState<ProductType[]>(initialState);

  const addProduct = (product: ProductType) => {
    setProduct([...products, product]);
  };

  const removeProduct = (productId: number) => {
    setProduct(products.filter((item) => productId !== item.id));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider };
export default ProductContext;

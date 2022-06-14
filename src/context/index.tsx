import { ProductContextProvider } from './checkout';

const GlobalContext = ({ children }: any) => {
  return <ProductContextProvider>{children}</ProductContextProvider>;
};

export default GlobalContext;

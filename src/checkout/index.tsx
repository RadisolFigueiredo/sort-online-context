import { useContext } from 'react';
import ProductContext from '../context/checkout';

import ClearIcon from '@mui/icons-material/Clear';

import * as S from './style';
import { formatCurrency } from '../utils/formatCurrency';

export default function Checkout() {
  const { products, removeProduct } = useContext(ProductContext);

  const mensageEmptyCart = () => {
    if (products.length === 0) {
      return <h2>Nenhum produto foi adicionado ao seu carrinho de compras</h2>;
    }
  };

  const sumProducts = products
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <>
      <S.Container>
        {mensageEmptyCart()}
        {!mensageEmptyCart() && (
          <>
            <S.BoxWidth width='60%'>
              <S.THead>
                <S.Title>Product</S.Title>
              </S.THead>
              {products.map((item) => {
                return (
                  <S.TBody>
                    <img
                      src={item.image}
                      alt={item.title}
                      width='80'
                      style={{ paddingRight: 10 }}
                    />
                    <S.TextBody>{item.title}</S.TextBody>
                  </S.TBody>
                );
              })}
            </S.BoxWidth>
            <S.BoxWidth width='20%'>
              <S.THead>
                <S.Title alignTitle={'end'}>Quantity</S.Title>
              </S.THead>
              {products.map(() => {
                return (
                  <S.TBodyAlign>
                    <S.TextBody>1</S.TextBody>
                  </S.TBodyAlign>
                );
              })}
            </S.BoxWidth>

            <S.BoxWidth width='20%'>
              <S.THead>
                <S.Title alignTitle={'end'}>Price</S.Title>
              </S.THead>
              {products.map((item) => {
                return (
                  <S.TBodyAlign>
                    <S.TextBody paddingRight='20px'>
                      {formatCurrency(item.price)}
                    </S.TextBody>
                    <ClearIcon
                      color='error'
                      fontSize='medium'
                      onClick={() => removeProduct(item.id)}
                    />
                  </S.TBodyAlign>
                );
              })}
            </S.BoxWidth>
          </>
        )}
      </S.Container>
      <S.BoxTotal>
        <S.TextBody>Total: </S.TextBody>
        <S.TextBody paddingLeft='10px' paddingRight='14px' fWeight={600}>
          {formatCurrency(sumProducts)}
        </S.TextBody>
      </S.BoxTotal>
    </>
  );
}

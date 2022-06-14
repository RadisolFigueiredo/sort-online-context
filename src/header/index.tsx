import { useContext } from 'react';

import ProductContext from '../context/checkout';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import * as S from './styles';

export default function Header() {
  const { products } = useContext(ProductContext);

  return (
    <S.Container>
      <S.BoxLogo to={'/'}>
        <S.Logo>
          <S.LogoDS>DS</S.LogoDS>
        </S.Logo>
        <S.LogoText>Dev Store</S.LogoText>
      </S.BoxLogo>
      <S.BoxCart to={'/checkout'}>
        <ShoppingCartOutlinedIcon fontSize='large' />
        <S.BoxProductInCartLength>
          <S.ProductInCartLength>{products.length}</S.ProductInCartLength>
        </S.BoxProductInCartLength>
      </S.BoxCart>
    </S.Container>
  );
}

import { useContext } from 'react';
import ProductContext from '../context/checkout';

import AddIcon from '@mui/icons-material/Add';

import * as S from './styles';
import { formatCurrency } from '../utils/formatCurrency';
import { Button } from '@mui/material';

export default function Home() {
  const productList = [
    {
      id: 1,
      image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX679_.jpg',
      title: 'Notebook 1',
      description:
        'This is a notebook description. This is a notebook description',
      price: 5000,
      priceDiscount: 4000,
    },
    {
      id: 2,
      image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX679_.jpg',
      title: 'Notebook 2',
      description:
        'This is a notebook description. This is a notebook description',
      price: 6500,
      priceDiscount: 5500,
    },
    {
      id: 3,
      image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX679_.jpg',
      title: 'Notebook 3',
      description:
        'This is a notebook description. This is a notebook description',
      price: 4200,
      priceDiscount: 0,
    },
    {
      id: 4,
      image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX679_.jpg',
      title: 'Notebook 4',
      description:
        'This is a notebook description. This is a notebook description',
      price: 3750,
      priceDiscount: 0,
    },
    {
      id: 5,
      image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX679_.jpg',
      title: 'Notebook 5',
      description:
        'This is a notebook description. This is a notebook description',
      price: 8450,
      priceDiscount: 6980,
    },
    {
      id: 6,
      image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX679_.jpg',
      title: 'Notebook 6',
      description:
        'This is a notebook description. This is a notebook description',
      price: 4580,
      priceDiscount: 0,
    },
    {
      id: 7,
      image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX679_.jpg',
      title: 'Notebook 7',
      description:
        'This is a notebook description. This is a notebook description',
      price: 5850,
      priceDiscount: 5600,
    },
    {
      id: 8,
      image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX679_.jpg',
      title: 'Notebook 8',
      description:
        'This is a notebook description. This is a notebook description',
      price: 5600,
      priceDiscount: 0,
    },
  ];

  const { products, addProduct, removeProduct } = useContext(ProductContext);

  return (
    <>
      <S.Container>
        {productList.map((item) => {
          return (
            <S.BoxCard key={item.id}>
              <img src={item.image} alt={item.title} width='220px' />
              <S.LineDivisor />
              <div>
                <S.TitleProduct>{item.title}</S.TitleProduct>
                <S.DescriptionProduct>{item.description}</S.DescriptionProduct>
              </div>
              <S.BoxInfoPriceCart>
                <S.BoxPrice>
                  <S.Price>{formatCurrency(item.price)}</S.Price>
                  {item.priceDiscount > 0 && (
                    <S.PriceDiscount>
                      {formatCurrency(item.priceDiscount)}
                    </S.PriceDiscount>
                  )}
                </S.BoxPrice>
                {products.some((product) => product.id === item.id) ? (
                  <Button onClick={() => removeProduct(item.id)}>
                    In the cart
                  </Button>
                ) : (
                  <S.Button productAvailable onClick={() => addProduct(item)}>
                    <S.AlignButton>
                      Add to cart
                      <AddIcon fontSize='small' />
                    </S.AlignButton>
                  </S.Button>
                )}
              </S.BoxInfoPriceCart>
            </S.BoxCard>
          );
        })}
      </S.Container>
    </>
  );
}

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  flex-wrap: wrap;
  margin-top: 50px;
  padding: 60px 40px 0 40px;
  justify-content: center;
`;

export const BoxCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  flex-wrap: wrap;
  margin: 15px;
  padding: 30px 25px 20px 25px;
  border: 1px solid;
  border-radius: 10px;
  text-decoration: none;
`;

export const LineDivisor = styled.div`
  border: 1px solid #f4f4f4;
  margin-top: 30px;
`;

export const TitleProduct = styled.p`
  color: #ba358c;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
`;

export const DescriptionProduct = styled.p`
  font-size: 12px;
`;

export const BoxInfoPriceCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxPrice = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Price = styled.p`
  font-weight: 600;
  padding-right: 4px;
  font-size: 20px;
`;

export const PriceDiscount = styled.p`
  font-size: 12px;
  margin-top: 22px;
  text-decoration: line-through;
`;

interface InTheCart {
  productAvailable?: boolean;
}

export const Button = styled.button<InTheCart>`
  height: 35px;
  border-radius: 5px;
  width: 100px;
  display: flex;
  align-items: center;
  background-color: ${({ productAvailable }) =>
    productAvailable ? '#ba358c' : '#ffffff'};
  border-color: transparent;
  color: ${({ productAvailable }) =>
    productAvailable ? '#ffffff' : '#08a632'};
  font-weight: 600;
  font-size: 12px;
  justify-content: center;
`;

export const AlignButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
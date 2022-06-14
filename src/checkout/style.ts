import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 40px;
  max-width: 100%;
  margin-top: 90px;
`;

interface WidthProps {
  width: string;
}

export const BoxWidth = styled.div<WidthProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
`;

export const THead = styled.div`
  background-color: #f4f4f4;
  margin-bottom: 20px;
  border-radius: 5px
`;

export const TBody = styled(THead)`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

export const TBodyAlign = styled(TBody)`
  align-items: center;
  justify-content: end;
`;

interface AlignTitle {
  alignTitle?: string;
}

export const Title = styled.p<AlignTitle>`
  font-weight: 600;
  padding: 0 10px;
  font-size: 18px;
  text-align: ${({ alignTitle }) => alignTitle};
`;

interface PaddingProps {
  paddingLeft?: string;
  paddingRight?: string;
  fWeight?: number;
}

export const TextBody = styled.p<PaddingProps>`
  font-size: 16px;
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  font-weight: ${({ fWeight }) => fWeight};

`;

export const BoxTotal = styled.div`
  width: 98%;
  display: flex;
  justify-content: flex-end;
`;

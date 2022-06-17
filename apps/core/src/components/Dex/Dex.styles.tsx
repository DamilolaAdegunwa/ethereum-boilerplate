import styled from 'styled-components';
import resetCSS from '../../../../../libs/ui/src/styles/reset';

const DivStyled = styled.div`
  ${resetCSS};
  width: 430px;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
  border: 1px solid #e7eaf3;
  border-radius: 1rem;
  font-size: 16px;
  font-weight: 500;
  align-item: center;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
`;

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
  border: 1px solid #e7eaf3;
  border-radius: 1rem;
  font-size: 16px;
  font-weight: 500;
  align-item: center;
  padding: 0.8rem;
`;

export default {
  DivStyled,
  CardStyled,
};

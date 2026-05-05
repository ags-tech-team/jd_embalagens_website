import styled from 'styled-components';

export const ProductsContainer = styled.div`
  padding: 4rem 5%;
  text-align: center;

  h1 {
    color: ${props => props.theme.colors.royal};
    margin-bottom: 2rem;
  }
`;
import styled from 'styled-components';

export interface AddressProps {
  align: string;
}

export const Address = styled.address<AddressProps>`
  ${(props) => props.align ? `text-align: ${props.align};`: ''}
`;

export default Address;

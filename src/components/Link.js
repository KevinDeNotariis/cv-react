import styled from 'styled-components';

const Link = styled.a.attrs((props) => ({
  target: props.target || '_blank',
}))`
  padding: 5px;
  font-variant-caps: petite-caps;

  :hover {
    background-color: #006daa;
    color: white;
    border-radius: 5px;
  }
`;

export default Link;

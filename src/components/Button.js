import styled from 'styled-components';

const IButton = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 20px;
  font-variant-caps: petite-caps;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
    border: ${(props) => props.hoverBorder};
  }
`;

const Button = ({ on, children, ...props }) => {
  let backgroundColor = '';
  let color = '';
  let border = '';

  let hoverBackgroundColor = '';
  let hoverColor = '';
  let hoverBorder = '';

  switch (on) {
    case 'white-background':
      backgroundColor = '#b9d6f2';
      color = 'black';
      border = '2px solid #0353a4';
      hoverBackgroundColor = '#0353a4';
      hoverColor = 'white';
      hoverBorder = border;
      break;
    case 'blue-background':
      backgroundColor = 'white';
      color = 'black';
      border = '2px solid #333';
      hoverBackgroundColor = '#333';
      hoverColor = 'white';
      hoverBorder = border;
      break;
    default:
      backgroundColor = '#b9d6f2';
      color = 'black';
      border = '2px solid #0353a4';
      hoverBackgroundColor = '#0353a4';
      hoverColor = 'white';
      hoverBorder = border;
      break;
  }

  return (
    <IButton
      {...props}
      backgroundColor={backgroundColor}
      color={color}
      border={border}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverColor={hoverColor}
      hoverBorder={hoverBorder}
    >
      {children}
    </IButton>
  );
};

export default Button;

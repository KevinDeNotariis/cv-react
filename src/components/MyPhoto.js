import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const MyPhoto = () => {
  return (
    <Container>
      <Image src="me.jpg" alt="me" />
    </Container>
  );
};

export default MyPhoto;

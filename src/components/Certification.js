import Logo from './Logo';
import styled from 'styled-components';
import Link from './Link';

const Container = styled.div`
  place-self: center stretch;
  align-self: stretch;

  display: flex;
  flex-direction: 'row';
  align-items: center;
  column-gap: 10px;

  padding: 0 10px;
  border: 2px solid blue;
  border-radius: 30px;
  background-color: lightblue;

  text-align: left;
`;

const Cert = styled.div`
  font-variant-caps: petite-caps;
`;

const Certification = ({ cert, group }) => {
  return (
    <Container>
      <Logo name={group} alt={`${group} logo`} height={48} width={48} />
      {cert.link ? (
        <Link href={cert.link}>
          <Cert>{cert.title}</Cert>
        </Link>
      ) : (
        <Cert>{cert.title}</Cert>
      )}
    </Container>
  );
};

export default Certification;

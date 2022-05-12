import Certification from './Certification';
import styled from 'styled-components';
import { H1 } from './headers';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerGroup = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CertificationsGroup = styled.div.attrs((_) => ({
  columnWidth: 300,
  columnNumber: 3,
}))`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columnNumber},
    ${(props) => props.columnWidth}px
  );
  grid-auto-rows: 100px;
  column-gap: 20px;
  row-gap: 20px;

  justify-content: center;
  align-items: center;

  text-align: center;

  @media screen and (max-width: ${(props) => props.columnNumber * props.columnWidth}px) {
    grid-template-columns: repeat(
      ${(props) => props.columnNumber - 1},
      ${(props) => props.columnWidth}px
    );
  }

  @media screen and (max-width: ${(props) => (props.columnNumber - 1) * props.columnWidth}px) {
    grid-template-columns: repeat(
      ${(props) => props.columnNumber - 2},
      ${(props) => props.columnWidth}px
    );
  }
`;

const Certifications = ({ data }) => {
  return (
    <Container>
      {Object.keys(data).map((group) => {
        return (
          <ContainerGroup key={group}>
            <H1>{group[0].toUpperCase() + group.slice(1)}</H1>
            <CertificationsGroup>
              {data[group]
                .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
                .map((cert) => {
                  return <Certification group={group} cert={cert} key={group + cert.title} />;
                })}
            </CertificationsGroup>
          </ContainerGroup>
        );
      })}
    </Container>
  );
};

export default Certifications;

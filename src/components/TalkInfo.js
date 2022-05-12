import styled from 'styled-components';
import { H1 } from './headers';
import ToggleText from './ToggleText';
import Link from './Link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubContainer = styled.div`
  margin: 10px;
  display: grid;
  gap: 20px 20px;
  font-size: 1.2rem;
  align-items: center;
  grid-template-columns: 1fr 3fr;
  grid-auto-rows: minmax(40px, auto);
  font-variant-caps: petite-caps;
`;

const Header = styled.div`
  text-align: end;
`;

const Content = styled.div`
  background-color: #b9d6f2;

  text-align: justify;

  height: 100%;
  align-self: center;
  padding: 0 10px;

  display: flex;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    text-align: start;
  }
`;

const TalkInfo = ({ talk }) => {
  return (
    <Container>
      <H1>
        {talk.what} - {talk.type}
      </H1>
      <SubContainer>
        <Header>When:</Header>
        <Content>{talk.date}</Content>
        <Header>Title:</Header>
        <Content>{talk.title}</Content>
        <Header>Subtitle:</Header>
        <Content>{talk.subtitle}</Content>
        <Header>Slides:</Header>
        <Content>{talk.slides ? <Link href={talk.slides}>SLIDES</Link> : 'TO COME SOON'}</Content>
        <Header>Short Description:</Header>
        <Content>{talk.short_description}</Content>
      </SubContainer>
      <ToggleText txt={talk.description} />
    </Container>
  );
};

export default TalkInfo;

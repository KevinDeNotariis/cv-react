import styled from 'styled-components';
import HorizontalLine from './HorizontalLine';
import TalkInfo from './TalkInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TalkContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  text-align: center;

  @media only screen and (max-width: 1200px) {
    width: 70%;
  }

  @media only screen and (max-width: 700px) {
    width: 90%;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

const YouTubeVideoContainer = styled.div`
  margin: 10px 0;
  padding-bottom: 56.2%;
  height: 0px;
  overflow: hidden;
  padding-top: 30px;
  position: relative;

  object,
  iframe,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const YoutubeVideoIframe = styled.iframe.attrs((props) => ({
  title: props.title,
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
}))`
  src: ${(props) => props.src};
`;

const Talks = ({ data }) => {
  return (
    <Container>
      {data.map((talk, i) => (
        <TalkContainer key={talk.what}>
          <TalkInfo talk={talk} />
          {talk.embed_video ? (
            <YouTubeVideoContainer>
              <YoutubeVideoIframe
                allowFullScreen
                src={talk.embed_video}
                title={talk.what}
              ></YoutubeVideoIframe>
            </YouTubeVideoContainer>
          ) : (
            <p>Video to come soon</p>
          )}
          {i !== data.length - 1 ? <HorizontalLine /> : undefined}
        </TalkContainer>
      ))}
    </Container>
  );
};

export default Talks;

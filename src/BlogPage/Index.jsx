import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { GoHeart } from "react-icons/go";
import { FaShare } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";

const Index = () => {
  return (
    <Wrapper>
      <MainHeroImg>
        <img
          src="https://images.pexels.com/photos/209798/pexels-photo-209798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Mount Fuji"
        ></img>
      </MainHeroImg>
      <Header>
        <Date>15th March, 2024</Date>
        <Title>
          Beyond Sushi and Skyscrapers: Unveiling Japan's Hidden Gems
        </Title>
        <Subtitle>
          Planning your Japan adventure: Must-see sights, hidden gems, and local
          travel tips.
        </Subtitle>
      </Header>
      <BlogPost />
      <SocialIcons />
      <AuthorAbout>
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        ></img>
        <div>
          <h3>Emily Lee</h3>
          <p>
            Emily is a passionate traveler and writer who has explored the
            diverse landscapes and cultures of Japan, capturing the essence of
            this enchanting country through her words.
          </p>
        </div>
      </AuthorAbout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
`;

const MainHeroImg = styled.div`
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  @media (min-width: 48rem) {
    img {
      height: 500px;
    }
  }
`;

const Header = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  margin-bottom: 1rem;
  border-radius: 1rem;
  margin: 0 auto;

  @media (min-width: 48rem) {
    max-width: 80%;
  }
`;

const Date = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Title = styled.h1`
  font-family: "Bebas Neue", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  line-height: 1.2;

  @media (min-width: 48rem) {
    font-size: 4.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
  font-weight: 300;
  line-height: 1.2;

  @media (min-width: 48rem) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const AuthorAbout = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  margin: 1rem auto;

  border-top: 1px solid #535353;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.8rem;
    line-height: 1.5;
    max-width: 50ch;
  }

  @media (min-width: 48rem) {
    width: 100%;

    img {
      width: 70px;
      height: 70px;
    }
  }
`;

const BlogPost = () => {
  return (
    <Container>
      <p>
        Begin your adventure in Tokyo, where skyscrapers stand tall alongside
        traditional temples, and neon lights illuminate bustling streets. Visit
        Shibuya and Shinjuku, experiencing the organized chaos of Shibuya
        Crossing and the vibrant energy of these iconic neighborhoods.
      </p>
      <p>
        Delve into Japan's culinary delights, savoring sushi at Tsukiji Fish
        Market or indulging in a traditional kaiseki meal. Participate in a tea
        ceremony, attend a sumo wrestling match, and unwind in a soothing hot
        spring bath at a traditional ryokan.
      </p>
      <QuoteBox>
      <ImQuotesLeft />
        <p>
          "Kyoto, Japan's cultural capital, invites you to immerse yourself in
          its rich heritage, from the historic streets of Gion to the tranquil
          beauty of Fushimi Inari Shrine,"
        </p>
      </QuoteBox>
      <p>
        "Japan's blend of tradition and innovation is showcased in its
        futuristic skyline and awe-inspiring natural landscapes, offering a
        truly diverse and captivating experience for travelers," Emily Lee
        concludes.
      </p>
      <MotionImg
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        delay={0.5}
        duration={1}
        src="https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Streets of Tokyo"
      />
      <p>
        Marvel at the towering Tokyo Skytree and explore the high-tech wonders
        of Akihabara. Embark on hikes through ancient forests in Yakushima or
        gaze upon the beauty of cherry blossoms in bloom.
      </p>
      <QuoteBox>
      <ImQuotesLeft />
        <p>
          "Japan, where ancient traditions harmonize with cutting-edge
          technology, offers an unforgettable journey through its vibrant cities
          and serene landscapes,"
        </p>
      </QuoteBox>
      <p>
        In Japan, every moment is a fusion of the past and the future, inviting
        travelers to embark on a journey of discovery and wonder.
      </p>
      <MotionImg
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        delay={0.5}

        src="https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Shibuya Crossing"
      />
    </Container>
  );
};

const Container = styled.div`
  max-width: 75ch;
  margin: 2rem 1rem;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  @media (min-width: 48rem) {
    margin: 2rem auto 4rem;
  }
`;

const MotionImg = styled(motion.img)`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;
const QuoteBox = styled.div`
  padding: 1rem;
  background-color: #f9f9f9;
  margin-bottom: 1.5rem;
  position: relative;


  p {
    font-size: 1.2rem;
    font-weight: 700;
    color: #333;
    position: relative;
    z-index: 1;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 5rem;
    z-index: 0;
    color: #dddada;
  }

  @media (min-width: 48rem) {
    p {
      font-size: 1.5rem;
    }
  }
`;

const SocialIcons = () => {
  return (
    <SocialContainer>
      <GoHeart />
      <FaShare />
    </SocialContainer>
  );
};

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #f9f9f9;

  svg {
    font-size: 1.5rem;
    color: #333;
    cursor: pointer;

    &:hover {
      color: #f50057;
    }
  }
`;
export default Index;

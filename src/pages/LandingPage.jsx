import React from 'react'
import { Container } from '../styles/Container.styled'
import { Form, Input } from '../styles/Form.styled'
import { Section } from '../styles/Section.styled'
import { Card, CardGroup } from '../styles/Card.styled'
import { Hero } from '../styles/Hero.styled'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import heroImg from '../assets/img/illustration-working.svg'
import shortenBG from '../assets/img/bg-shorten-desktop.svg'
import brandRecognitionIcon from '../assets/img/icon-brand-recognition.svg'
import DetailedRecordsIcon from '../assets/img/icon-detailed-records.svg'
import FullyCustomizableIcon from '../assets/img/icon-fully-customizable.svg'
import boostBG from '../assets/img/bg-boost-desktop.svg'

const StatisticsHeading = styled.h2`
  color: var(--color-neutral-dark-blue);
  font-size: 40px;
  line-height: 1.1;
  text-align: center;
  margin-bottom: 20px;
`

const StatisticsLead = styled.p`
  color: var(--color-neutral-gray);
  width: 45ch;
  margin: 0 auto;
  margin-bottom: 140px;
  text-align: center;
`

const BoostHeading = styled.h2`
  color: var(--color-white);
  font-size: 40px;
  line-height: 1.1;
  margin-bottom: 20px;
`

/* const StyledFacebookIcon = styled(FacebookIcon)`
  fill: var(--color-white);
  transition: fill 0.25s;

  ${Link}:hover & {
    fill: var(--color-primary-cyan);
  }
`

const StyledTwitterIcon = styled(TwitterIcon)`
  fill: var(--color-white);
  transition: fill 0.25s;

  ${Link}:hover & {
    fill: var(--color-primary-cyan);
  }
`

const StyledPinterestIcon = styled(PinterestIcon)`
  fill: var(--color-white);
  transition: fill 0.25s;

  ${Link}:hover & {
    fill: var(--color-primary-cyan);
  }
`

const StyledInstagramIcon = styled(InstagramIcon)`
  fill: var(--color-white);
  transition: fill 0.25s;

  ${Link}:hover & {
    fill: var(--color-primary-cyan);
  }
` */

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero>
        <Container>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button size="20px">Get Started</Button>
          <img src={heroImg} alt="" />
        </Container>
      </Hero>
      <Container>
        <Form bgColor="var(--color-primary-dark-violet)" bgImage={shortenBG}>
          <Input type="text" placeholder="Shorten a link here..." />
          <Button size="20px" minradius>
            Shorten It!
          </Button>
        </Form>
      </Container>
      <Section
        bgColor="var(--color-neutral-gray-light)"
        padding="170px 0 140px"
      >
        <Container>
          <StatisticsHeading>Advanced Statistics</StatisticsHeading>
          <StatisticsLead>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </StatisticsLead>
          <CardGroup>
            <Card>
              <span>
                <img src={brandRecognitionIcon} alt="" />
              </span>
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </Card>
            <Card>
              <span>
                <img src={DetailedRecordsIcon} alt="" />
              </span>
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </Card>
            <Card>
              <span>
                <img src={FullyCustomizableIcon} alt="" />
              </span>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </Card>
          </CardGroup>
        </Container>
      </Section>
      <Section
        bgColor="var(--color-primary-dark-violet)"
        bgImage={boostBG}
        textCenter
      >
        <BoostHeading>Boost your links today</BoostHeading>
        <Button size="20px">Get Started</Button>
      </Section>
      <Footer />
    </>
  )
}

export default LandingPage

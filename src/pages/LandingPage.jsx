import React from 'react'
import { Container } from '../styles/Container.styled'
import { Section, SectionHeading, SectionLead } from '../styles/Section.styled'
import { Card, CardGroup } from '../styles/Card.styled'
import { Hero } from '../styles/Hero.styled'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Shorten from '../components/Shorten'
import heroImg from '../assets/img/illustration-working.svg'
import brandRecognitionIcon from '../assets/img/icon-brand-recognition.svg'
import DetailedRecordsIcon from '../assets/img/icon-detailed-records.svg'
import FullyCustomizableIcon from '../assets/img/icon-fully-customizable.svg'
import boostBG from '../assets/img/bg-boost-desktop.svg'

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero>
        <Container>
          <img src={heroImg} alt="" />
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button size="20px">Get Started</Button>
        </Container>
      </Hero>
      <Shorten />
      <Section
        bgColor="var(--color-neutral-gray-light)"
        padding="100px 0"
        textCenter
      >
        <Container>
          <SectionHeading>Advanced Statistics</SectionHeading>
          <SectionLead>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </SectionLead>
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
        <SectionHeading color="var(--color-white)">
          Boost your links today
        </SectionHeading>
        <Button size="20px">Get Started</Button>
      </Section>
      <Footer />
    </>
  )
}

export default LandingPage

import "./styles"

import { HooksProvider } from "./context/HooksProvider"

import Header from "./layouts/Header"
import Content from "./layouts/Content"
import Footer from "./layouts/Footer"

import Hero from "./sections/Hero"
import Greeting from "./sections/Greeting"
import MeetingPlace from "./sections/MeetingPlace"
import DailyPlane from "./sections/DailyPlane"
import CountDown from "./sections/CountDown"
import Guest from "./sections/Guest"

function App() {

  return (
    <HooksProvider>

      <Header />

      <Content>
        {/* <Hero />
        <Greeting />
        <DailyPlane />
        <CountDown />
        <MeetingPlace /> */}
        <Guest />
      </Content>

      <Footer />

    </HooksProvider>
  )

}

export default App;

import "@/styles"

import Header from "./layouts/Header"
import Content from "./layouts/Content"
import Footer from "./layouts/Footer"

import Hero from "./sections/Hero"
import Greeting from "./sections/Greeting"
import MeetingPlace from "./sections/MeetingPlace"
import DailyPlane from "./sections/DailyPlane"
import CountDown from "./sections/CountDown"
import GuestRSVP from "./sections/GuestRSVP"

function App() {

  return (
    <>
      <Header />

      <Content>
        <Hero />
        <Greeting />
        <DailyPlane />
        <CountDown />
        <MeetingPlace />
        <GuestRSVP />
      </Content>

      <Footer />
    </>
  )

}

export default App;

import "@/styles"

import Header from "./layouts/Header"
import Content from "./layouts/Content"
import Footer from "./layouts/Footer"
import Hero from "./sections/Hero"


function App() {

  return (
    <>
      <Header />

      <Content>
        <Hero />
        <Hero />
      </Content>

      <Footer />
    </>
  )

}

export default App;


import { HooksProvider } from "./providers/HooksProvider"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Layout from "./layout";

import "@/app/styles"

function App() {

  return (
    <HooksProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HooksProvider>
  )

}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./secreens/HomeScreen";
import AboutScreen from "./secreens/AboutScreen";
import ResumeScreen from "./secreens/ResumeScreen";
import ProjectsScreen from "./secreens/ProjectScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Flex as="main" direction="column" minH="xl" >
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/resume" element={<ResumeScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

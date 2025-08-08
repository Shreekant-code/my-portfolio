import { Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Project } from "./components/Project";
import { Skill } from "./components/Skill";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Education } from './components/Education';
import "./App.css"

import { useEffect, useState } from 'react';


import { LoadingScreen } from './components/Loading';

export const App = () => {
  const [isloading, setloading] = useState(true);

  useEffect(() => {
    const Interval = setTimeout(() => {
      setloading(false);
    }, 6000);
    return () => clearTimeout(Interval);
  }, []);

  return (
    <>
      {isloading ? (
        <LoadingScreen />
      ) : (
        <div className="App">
          <Header />
          <Home />
          <Education />
          <Skill />
          <Project />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;

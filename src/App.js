import React from 'react';
import { Header,Content,Footer } from './func-componets.js';
import Calender from './class-components';

function App() {
  return (
    <>
    <Header/>
    <p><center><Calender/></center></p>
    <Content/>
    <Footer/>
    </>
  )
}

export default App;

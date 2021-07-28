import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen'
import ProductPage from "./screens/ProductPage";
import Cart from "./screens/Cart";
import SignIn from './components/SignIn';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
            <Route path='/' component={HomeScreen} exact/>
            <Route path='/product/:id' component={ProductPage}/>
            <Route path='/Cart/:id?' component={Cart}/>
            <Route path='/profile' component={Profile} />
            <Route path='/signin' component={SignIn}/>

        </Container>
  
      </main>
      <Footer />
    </Router>
  )
}

export default App;


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
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


const App = () => {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  )
}

export default App;


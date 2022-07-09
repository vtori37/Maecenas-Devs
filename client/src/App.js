import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import BlogPage from './pages/BlogPage';
import Login from './pages/Login';
// import Creators from './pages/Creators';
// import Signup from './pages/Signup';
// import Home from './pages/Home';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// function App() {
//   return (
//     <div className="background">
//     <Header></Header>
//     <About></About>
//     </div>
//   );
// }
function App() {
  // const [currentPage, setCurrentPage] = useState("About");
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<About />} 
              />
              {/* <Route 
                path="/" 
                element={<Home />} 
              /> */}
              <Route 
                path="/login" 
                element={<Login />} 
              />
              {/* <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/Creators" 
                element={<Creators />} 
              /> */}
              <Route 
                path="/blogPage" 
                element={<BlogPage />} 
              /> 
              {/* Wild card * is used for "No Match" page */}
            </Routes>
          <Footer />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  )};

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { About } from './components/about/About';
import { Categories } from './components/categories/Categories';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className="App"
      style={{
        fontFamily: 'Raleway, sans-serif'
      }}
    >

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categories />}>
            {/* <Route path="me" element={<OwnUserProfile />} />
            <Route path=":id" element={<UserProfile />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <About />
    </>
  )
}

export default App;

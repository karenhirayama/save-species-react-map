import './App.css';
import { About } from './components/about/About';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className="App"
      style={{
        fontFamily: 'Raleway, sans-serif'
      }}
    >
      <Header />
      <About />
    </div>
  );
}

export default App;

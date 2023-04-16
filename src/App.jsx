import Home from "./pages/home";
import theme from './theme'
import './main.css'

function App() {
  return (
    <div style={{ 
      backgroundColor: theme.BACKGROUND,
      }} className="App">
        <Home/>
    </div>
  );
}

export default App;

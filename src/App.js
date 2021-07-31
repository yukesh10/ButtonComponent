import './App.css';
import SideNav from "./components/SideNav";
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <nav>
        <SideNav />
      </nav>
      <div className="mainContent">
        <MainContent />
      </div>
    </div>
  );
}

export default App;

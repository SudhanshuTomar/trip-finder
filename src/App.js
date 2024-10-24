import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="m-2 p-2">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

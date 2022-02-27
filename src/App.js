import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar';
import Content from './component/Content';

function App() {
  return (
    <div className='container'>
    <Sidebar/>
    <Content/>
    </div>
    );
}

export default App;

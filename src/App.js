import './App.css';
import {Routes,Route} from 'react-router-dom'
import Addtask from './Component/add';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Addtask />} />
    </Routes>
  );
}

export default App;

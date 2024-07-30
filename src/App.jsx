import './App.css';
import {router} from './Pages/index.js'
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;


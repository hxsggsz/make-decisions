import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './pages';
import { Todo } from './pages/todo';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='todo/:id' element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

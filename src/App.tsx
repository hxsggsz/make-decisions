import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Home } from './pages';
import { Todo } from './pages/todo';
import { NotFound } from './pages/notFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='todo/:id' element={<Todo />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

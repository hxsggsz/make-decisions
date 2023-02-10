import {
  BrowserRouter,
  Routes,
  Route,
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
        <Route path='notFound' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

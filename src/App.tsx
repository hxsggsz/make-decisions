import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Home } from './pages';
import { Todo } from './pages/todo';
import { NotFoundPage } from './pages/not-found';
import { Votes } from './pages/votes';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='todo/:id' element={<Todo />} />
        <Route path='votes/:id' element={<Votes />} />
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

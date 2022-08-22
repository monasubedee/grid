
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
  return (
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path="auth" element={<Auth />} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;

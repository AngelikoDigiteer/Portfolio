import './App.css';
import './App.scss';
import './custom.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Site from './layouts/Site';
import Index from './pages/Index';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Site />}>
          <Route index element={<Index />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

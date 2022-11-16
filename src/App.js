import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Places from './components/places/Places';
import Error from './components/404/Error';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/places' element={<Places />}></Route>
        </Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;

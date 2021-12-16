import './App.css';
import {Routes, Route} from 'react-router-dom';

// =========== Components ============== //
import Layout from './components/Layout';
import NotFound from './components/NotFound';

const App = () => {

  return (
    <>
      <Routes >
        <Route path="/" element={<Layout />}> 
          {/* <Route path=""  element={< />}/> */}
          {/* <Route path=""  element={< />}/> */}
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;

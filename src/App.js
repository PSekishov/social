import './App.css';
import {Routes, Route} from 'react-router-dom';

// =========== Components ============== //
import Layout from './components/Layout';
import NotFound from './components/NotFound';
// =========  Pages =============== //
import IndexPage from './pages/IndexPage';
import GroopsPage from './pages/GroopsPage';
import FrendsPage from './pages/FrendsPage';
import MessagesPage from './pages/MessagesPage';
import MusicPage from './pages/MusicPage';
import WeatherPage from './pages/WeatherPage';
import SportPage from './pages/SportPage';
import GamesPage from './pages/GamesPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {

  return (
    <>
      <Routes >
        <Route path="/" element={<Layout />}> 
          <Route index path="/" element={<IndexPage />}/>
          <Route path="groops" element={<GroopsPage />}/>
          <Route path="frends" element={<FrendsPage />}/> 
          <Route path="messages" element={<MessagesPage />}/>
          <Route path="musics" element={<MusicPage />}/>
          <Route path="weather" element={<WeatherPage />}/>
          <Route path="sport" element={<SportPage />}/>
          <Route path="games" element={<GamesPage />}/>
          <Route path="settings" element={<SettingsPage />}/>
          <Route path="profile" element={<ProfilePage />}/>
          {/* <Route path="*" element={<NotFound />}/> */}
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;


import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.scss'

// Component
import WelcomeComponent from './Components/Welcome/Welcome';
import HomeComponent from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          exact path={''} 
          element={<WelcomeComponent/>}
        />
        <Route 
          path={'/home/:page'} 
          element={<HomeComponent/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

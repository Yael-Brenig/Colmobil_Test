import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './components/homePage/homePage.js';
import WorkersList from './components/workersList/workersList.js';
import SimpleDialogDemo from './components/popup/popup';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/workersList' element={<WorkersList />} />
          <Route path='/popup' element={<SimpleDialogDemo />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

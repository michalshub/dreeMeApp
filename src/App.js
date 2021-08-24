import './App.css';
import RouterPage from './Router'
import { BrowserRouter as Router } from 'react-router-dom';
import store from './Store/store';
import { Provider } from 'react-redux';
import Home from './components/home';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <RouterPage></RouterPage>
      </div>
    </Router>
  </Provider>
  );
}

export default App;

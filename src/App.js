import './App.css';
import {Provider} from 'react-redux'
import Main from './components/Main';
import store from './contactredux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Contacts</h1>
        <Main/>
      </div>
    </Provider>
  );
}

export default App;

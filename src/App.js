import './App.css';
import {Provider} from 'react-redux'
import Main from './components/Main';
import store from './contactredux/store';
import { ConfirmProvider } from 'material-ui-confirm';

function App() {
  return (
    <ConfirmProvider>
      <Provider store={store}>
        <div className="App">
        <h1 style={{height:'130px',marginTop:"0px",fontSize:"13vh", fontFamily:"Monospace" , color:"#eb3474"}}>Contacts</h1>
          <Main/>
        </div>
      </Provider>
    </ConfirmProvider>
  );
}

export default App;

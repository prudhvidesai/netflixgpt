import Body from './components/Body';
import { Provider } from 'react-redux';
import userStore from './utils/userStore';

import './App.css';

function App() {
  return (
   <Provider store={userStore}>
     <Body/>
   </Provider>
      
    
  );
}

export default App;

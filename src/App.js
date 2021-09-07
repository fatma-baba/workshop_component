import Address from './Component/Profile/Address';
import ProfilPhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';

import './App.css';

function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName/>
      <Address/>    
    </div>
  );
}

export default App;

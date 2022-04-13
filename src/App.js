import React, { useState } from 'react';
import ConnectModal from './components/ConnectModal';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase.config';

const App = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
  return (
    <div>
      <div className="app-header">
        <ConnectModal />
      </div>
      <div className="posts-container"></div>
    </div>
  );
};

export default App;

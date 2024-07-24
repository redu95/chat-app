import React from 'react';
import Auth from './components/Auth';
import ChatRoom from './components/ChatRoom';
import { auth } from './firebaseConfig';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? <ChatRoom /> : <Auth />}
    </div>
  );
};

export default App;

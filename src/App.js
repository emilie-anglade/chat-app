import React from 'react';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact 
      avatar="https://randomuser.me/api/portraits/women/82.jpg" 
      name="Gertrude Wood"
      online
      />
      <Contact 
      avatar="https://randomuser.me/api/portraits/men/59.jpg" 
      name="Daryl Fox"
      offline
      />
      <Contact 
      avatar="https://randomuser.me/api/portraits/women/7.jpg" 
      name="Jamie Stephens"
      online
      />
    </div>
  );
}

export default App;

import React from 'react';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact 
      avatar="https://randomuser.me/api/portraits/women/82.jpg" 
      name="Gertrude Wood"
      online={true}
      />
      <Contact 
      avatar="https://randomuser.me/api/portraits/men/59.jpg" 
      name="Daryl Fox"
      online={false}
      />
      <Contact 
      avatar="https://randomuser.me/api/portraits/women/7.jpg" 
      name="Jamie Stephens"
      online={true}
      />
    </div>
  );
}

export default App;

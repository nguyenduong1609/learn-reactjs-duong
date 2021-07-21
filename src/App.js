import React from 'react';
import { Route } from 'react-router-dom';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';


function App() {
  return (
    <div className="App">
      Header
      <Route path='/todos' component={TodoFeature} />
      <Route path='/albums' component={AlbumFeature} />
      Footer
    </div>
  );
};

export default App;

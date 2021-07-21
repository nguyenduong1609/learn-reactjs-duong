import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';


function App() {
  return (
    <div className="App">
      Header
      <p> <Link to='/todos' > TODOS </Link> </p>
      <p> <Link to='/albums' > ALBUMS </Link> </p>
      <p> <NavLink to='/todos' activeClassName='active-menu' > TODOS </NavLink> </p>
      <p> <NavLink to='/albums' > ALBUMS </NavLink> </p>
      <Route path='/todos' component={TodoFeature} />
      <Route path='/albums' component={AlbumFeature} />
      Footer
    </div>
  );
};

export default App;

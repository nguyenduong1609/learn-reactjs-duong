import React, { useEffect } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';


function App() {

  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
    
  }, []);

  return (
    <div className="App">
      Header
      <p> <NavLink to='/todos' activeClassName='active-menu' > TODOS </NavLink> </p>
      <p> <NavLink to='/albums' > ALBUMS </NavLink> </p>

      <Switch>

        <Redirect from='/home' to='/' exact />
        <Redirect from='/post-list/:postId' to='/post/:postId' exact />

        <Route path='/todos' component={TodoFeature} />
        <Route path='/albums' component={AlbumFeature} />
        
        <Route component={NotFound} />

      </Switch>
      
    </div>
  );
};

export default App;

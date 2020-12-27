import React, { useState, useEffect } from "react";
import { firebaseApp } from "./base";
import { NewAlbumForm } from "./NewAlbumForm";
import { BrowserRouter as Router , Switch, Route, Link } from "react-router-dom";
import { Album } from "./Album";
import { Home } from "./Home";
import {useStateValue} from "./StateProvider"
import Login from "./Login"
import db from "./base"


function App() {
  const [albums, setAlbums] = useState([]);
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    const unmount = db.collection("albums").onSnapshot((snapshot) => {
      const tempAlbums = [];
      snapshot.forEach((doc) => {
        tempAlbums.push({ ...doc.data(), id: doc.id });
      });
      setAlbums(tempAlbums);
    });
    return unmount;
  }, []);

  return (
    <div className='app'>
      {!user? (
        <Login />
      ):(
        <main>
        <Router>
        <Switch>
        <Route exact path="/" render={() => <Home albums={albums}/>}/>
        <Route path="/:album" component={Album} />
         </Switch>
      </Router>
    </main>
      )}
      
    </div>
    
  );
}

export default App;


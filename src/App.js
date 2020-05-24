import React, {useState} from 'react';
import Users from './components/Users/Users'
import Footer from './components/Footer/Footer'
import UsersDetails from './components/UsersDetails/UsersDetails'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  const [userList] = useState([])

  return (
    <>
    <Router>
      <Switch>
        <>
          <Route exact path= '/' component= {Users}/>
          <Route exact path = '/userDetails/:id' component={(props) => <UsersDetails userList={userList} {...props}/>} />
        </>
      </Switch>
   </Router>
   <Footer />
    </>
  );
}

export default App;

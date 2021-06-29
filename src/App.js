import './App.css';
import {ApolloClient, 
  InMemoryCache,
  ApolloProvider } from '@apollo/client'; 
import {
  Route,
  NavLink,
  HashRouter, Redirect
} from "react-router-dom";
import AllPeople from "./people";
import details from "./details";



const graphClient = new ApolloClient({
  uri: "http://localhost:4000/test",
  cache: new InMemoryCache()
});



function App(){
  return (
      <HashRouter>
          <ApolloProvider client = {graphClient}>
              <div class = 'body'>

                  <div>
                      <Redirect exact from={"/"} to={"AllPeople/1"}/>
                      <Route exact path = "/details/:localname" component={details}/>
                      <Route exact path = "/AllPeople/:pageNumber" component={AllPeople}/>
                  </div>
                  <div className='menu'>
                      <li><NavLink to="/AllPeople/1"> 1 </NavLink></li>
                      <li><NavLink to="/AllPeople/2"> 2 </NavLink></li>
                      <li><NavLink to="/AllPeople/3"> 3 </NavLink></li>
                      <li><NavLink to="/AllPeople/4"> 4 </NavLink></li>
                      <li><NavLink to="/AllPeople/5"> 5 </NavLink></li>
                      <li><NavLink to="/AllPeople/6"> 6 </NavLink></li>
                      <li><NavLink to="/AllPeople/7"> 7 </NavLink></li>
                      <li><NavLink to="/AllPeople/8"> 8 </NavLink></li>
                      <li><NavLink to="/AllPeople/9"> 9 </NavLink></li>
                      <li><NavLink to="/AllPeople/1"> Home </NavLink></li>
                  </div>
              </div>
          </ApolloProvider>
      </HashRouter>

  );
}

export default App;

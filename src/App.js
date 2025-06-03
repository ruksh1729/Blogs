import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {

  const title = 'Welcome to the new blog';
  const likes = '50';
  // const person = { name: 'yoshi', age:30 }; // cannot print the object, boolenas
  const link='https://www.google.com';
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='content'>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/create">
            <Create/>
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetails/>
          </Route>
        </Switch>
          {/* <h1>{title}</h1>
          <p>Liked {likes} times</p>
          <p>{person}</p> cannot print objects and bolleans
          <p>{Math.random()*10}</p> can print numbers and arrays
          <a href={link}>GOOGLE</a>  can add links */}
      </div>    
    </div>
    </Router>
  );
}

export default App;

// if we add another route such as create directly, then what react does is
// it finds the match of /create in path and it interprets / in it too
// hence the create page is also loaded just below home page
// to not let that happen we use exact path instead of path, so it not searches / inside /create
// it will match it entirely
// currently when we click on new blogs, the site is redirecting by sending the request to the server
// not internally by react
// to do soo, we need to use Link tag instead of anchor tag, to property instead of href
// after this when we click on home and then instantly click on new blog, we will be redirected to new blog
// but thewre will be an error message, cause,the fetch is still running and we are not on that page
// to avoid this we use use CLEANUP FUNCTION and abort controller
// if you want to add some random id in the end then we can do it by /blogs/:id
// else this random id if we enter, it will not work


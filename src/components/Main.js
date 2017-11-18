require('styles/App.css');
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import About from './About';
import Todos from './Todos';

const Content = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path="/todos" component={Todos}/>
        <Route path='/about' component={About}/>
      </Switch>
    </main>
  )
}

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/todos'>Todos</Link></li>
          <li><Link to='/about'>about</Link></li>
        </ul>
      </nav>
    </header>
  )
}

const Main = () => {
  return (
    <div>
      <h1>Hello React!</h1>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <a href="http://jwba.pl">jwba.pl - jason web apps</a>
    </footer>
  )
}

class App extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }

    this.apiUrl = 'https://5a088601519b7c0012caab20.mockapi.io/api/v1/react-simple-todo'
  }
  // Lifecycle method
  componentDidMount(){
    // Make HTTP reques with Axios
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        this.setState({data:res.data});
      });
  }
 
  render(){
    // Render JSX
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;


import React from 'react';
import './App.css';
import Employee from './Components/Employee';
import Dashboard from './Components/Dashboard';
import { UserProvider } from './Components/userContext'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      firstElementEmployee: {}
  
    };

  }

  setFirstElementEmployee() {

    let employee = this.state.data.data[0];

    this.setState({
      firstElementEmployee: employee
    })

  }

  componentDidMount() {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
         console.log(data);
         this.setState({
          data: data
          
        })
        this.setFirstElementEmployee();
        
      })

  }

  render() {

    // console.log(this.state.data.data);
    // let dataArray = this.state.data["data"];
    // console.log(dataArray);
  
    return ( 


    <div className="App">
      <UserProvider value={this.state.firstElementEmployee}>
     
    <Router>
    <div>

      <nav>
          
            <Link to="/home">*Home*</Link> 
        
            <Link to="/about">*About*</Link> 
         
            <Link to="/dashboard">*Dashboard*</Link> 
      
            <Link to="/signup">*Sign up*</Link> 
     
      </nav>
 
      <Switch>

        <Route exact path="/home"> 
          <Home />
        </Route>
        <Route exact path="/about"> 
          <About />
        </Route>
        <Route exact path="/dashboard"> 
          <Dashboard />
        </Route>
        <Route exact path="/signup"> 
          <Employee />
        </Route>
        <Route exact path="/thank-you"> 
          <ThankYou />
        </Route>
        
      </Switch>
    </div>
  </Router>
  
      </UserProvider>
      </div>
    )
  }


}



function Home() {
  return <h2>Worldwide Fashion LLC</h2>;
}

function About() {
  return <h2>We are proud of our products and our employee</h2>;
}


function ThankYou() {
  return <h2>Thank you for signing up</h2>;
}







// //React original
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

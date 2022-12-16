import {React} from 'react'
import {EventEmail, Navbar} from './'
import './App.css';

import {Button, Alert, Breadcrumb, BreadcrumbItem,  Form} from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
    <Navbar></Navbar>
    <EventEmail></EventEmail>
    

  
       
       
      </header>
    </div>
  );
}

export default App;

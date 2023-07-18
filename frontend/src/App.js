import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import NotesListPages from './pages/NotesListPages'
import NotePage from './pages/NotePage'



function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
          <Header/>
          <Route path="/" exact component={NotesListPages}/>
          <Route path="/note/:id" component={NotePage}/>
        </div>
      </div>
    </Router>
    
  );
}

export default App;

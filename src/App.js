import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { addPost } from './redux/state';

function App(props) {

  return (
      <div className="App_wrap" >
        <Header />
        <Navbar />
        <div className="App_content">
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost = {props.addPost}/>} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/setting' component={Setting} />
        </div>
      </div>
  );
}

export default App;
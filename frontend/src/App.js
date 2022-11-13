import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './pages/Account';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
    </Router>
  );
}

export default App;


import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RestuarantList from './components/RestuarantList';
import RestuarantDetails from './components/RestuarantDetails';
import { Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Payment from './components/Payment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<Header />
</header>

<Routes>
  {/*path for  RestuarantList*/}
  <Route path="/"element={<RestuarantList/>}/>
  {/*path for  RestuarantList*/}
  <Route path="/restuarant/:id"element={<RestuarantDetails/>}/>

  <Route path="./Login"element={<Login/>}/>
  <Route path="/Payment"element={<Payment/>}/>

</Routes>

<Footer />
    </div>
    
  );
}

export default App;

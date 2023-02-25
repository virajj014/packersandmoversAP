import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import AddSubscription from './pages/AddSubscription';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import ViewSubscriptions from './pages/ViewSubscriptions/ViewSubscriptions';
function App() {
  return (
    // <div className="App">
    //   <AddSubscription/>
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewSubscriptions/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/addsubscription" element={<AddSubscription/>}/>
        <Route path="/viewsubscriptions" element={<ViewSubscriptions/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

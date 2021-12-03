import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux";
import './App.css';
import ProtectedRoute from "./Routes/ProtectedRoute";
import AuthenticatedRoute from "./Routes/AuthenticatedRoutes";
import Header from './components/Header';
import DashBoardNav from './components/DashBoardNav';
import HomePage  from './Pages/Home';
import AuthPage from './Pages/AuthPage'
import CollectionPage from './Pages/CollectionPage';
import AlbumPage from './Pages/AlbumPage/index';

function App() {

  return (
    <Router>
        
        <Routes>
          <Route exact path="/auth" element={<AuthPage />} />
          <Route element={<AuthenticatedRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<AuthenticatedRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<AuthenticatedRoute />}>
            <Route path="/albums" element={<CollectionPage />} />
          </Route>
          <Route element={<AuthenticatedRoute />}>
            <Route path="/album/:id" element={<AlbumPage />} />
          </Route>
          
        </Routes>
    </Router>
  );
}

export default App; 
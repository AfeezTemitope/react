import './App.css';
import Index from "./pages";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Register";
import DashBoard from "./pages/DashBoard";
import ProfileSection from "./components/ProfileSection";
import Newsfeed from "./pages/Newsfeed";
import SportNews from "./pages/SportNews";
import CreatePost from "./pages/CreatePost";
import ViewPost from "./pages/ViewPost";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Register />} />
            <Route path="/dashboard" element={<DashBoard />}  />
            <Route path="/news-feed" element={<Newsfeed />} />
            <Route path="/sport-news" element={<SportNews />} />
            <Route path="/blog-posts" element={<CreatePost />} />
            <Route path="view-posts" element={<ViewPost/>} />
            <Route path="/emailLogin" element={<LoginPage />} />
        </Routes>
      </Router>
  );
}

export default App;

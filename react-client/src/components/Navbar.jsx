import { Link } from "react-router-dom";

const Navbar = () => {
    return (
       <div className="container">
           <div className="navbar">
              <Link to="/" className="logo">Dashboard</Link>
              <Link to="/create-post">Create Post</Link>
           </div>
       </div>
    );
};

export default Navbar;
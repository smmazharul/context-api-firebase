import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <div>
        <div className="navbar bg-primary text-neutral-content">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          <div className="">
            <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
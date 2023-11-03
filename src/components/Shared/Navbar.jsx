import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
  const handleLogOut = () => {
    logOut()
      .then(() => {
      
      })
    .catch(error=>console.log(error))
  }
    return (
      <div>
        <div className="navbar bg-primary text-neutral-content">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          <div className="">
            <Link className="btn btn-ghost normal-case text-xl" to="/">
              Home
            </Link>
            {user && (
              <Link className="btn btn-ghost normal-case text-xl" to="/orders">
                Orders
              </Link>
            )}
            {/* <Link className="btn btn-ghost normal-case text-xl" to="/login">
              Login
            </Link> */}

            {user ? (
              <>
                <p>{(user && user.displayName) || user?.email}</p>
                <Link
                  className="btn btn-ghost normal-case text-xl"
                  onClick={handleLogOut}
                >
                  LogOut
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="btn btn-ghost normal-case text-xl"
                  to={"/register"}
                >
                  Register
                </Link>
                <Link
                  className="btn btn-ghost normal-case text-xl"
                  to={"/login"}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;
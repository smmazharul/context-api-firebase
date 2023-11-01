import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h1>{user && user.displayName}</h1>
        </div>
    );
};

export default Home;
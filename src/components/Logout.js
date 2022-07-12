import { useHistory } from "react-router";

const Logout = () => {

    const history = useHistory();

    localStorage.removeItem('loggedInUser');
    localStorage.clear();

    alert("Logged out successfully...");
    history.push("/");

}
export default Logout;

 
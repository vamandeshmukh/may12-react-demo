import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logoutUser } from "../redux/AppUserSlice";
const Logout = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    dispatch(logoutUser());
    alert("Logged out successfully...");
    history.push("/");

}
export default Logout;


import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logoutUser } from "../redux/AppUserSlice";
import { logoutService } from "../services/AppUserService";

const Logout = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector(store => store.appUser.currentUser);

    const submitLogout = () => {
        logoutService(currentUser);
        dispatch(logoutUser());
        history.push("/");
    }
    return (
        <div className="container" >
            <p className="display-4 text-primary py-3">Logout</p>
            <hr />
            <div className="col-3 mt-3 py-3 shadow bg-white" >
                <h1 className="lead text-primary pb-2">Are you sure to logout?</h1>
                <form className="form form-group form-dark " onSubmit={submitLogout}>
                    <div>
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-outline-primary"
                            value="Logout"
                        />
                    </div>
                </form>
            </div>
        </div >
    )

}
export default Logout;



import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logoutUser } from "../redux/AppUserSlice";

const Logout = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const submitLogout = () => {
        dispatch(logoutUser());
        history.push("/");
    }
    return (
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Are you sure to logout?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={submitLogout}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Logout;




// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router";
// import { logoutUser } from "../redux/AppUserSlice";
// const Logout = () => {

//     const history = useHistory();
//     const dispatch = useDispatch();

//     dispatch(logoutUser());
//     alert("Logged out successfully...");
//     history.push("/");

// }
// export default Logout;


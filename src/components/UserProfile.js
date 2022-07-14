import { useSelector } from "react-redux";

const UserProfile = () => {

    const currentUser = useSelector(store => store.appUser.currentUser);
    return (
        <div className="container py-3">
            <p className="display-4">User profile</p>
            <hr />
            <div>
                {
                    currentUser &&
                    <div>
                        <p className="lead">User Profile</p>
                        <p>UserName: {currentUser.userName}</p>
                        <p>Role: {currentUser.role}</p>
                        <p>Avatar: { }</p>
                    </div>
                }
            </div>
        </div>
    );

}
export default UserProfile;


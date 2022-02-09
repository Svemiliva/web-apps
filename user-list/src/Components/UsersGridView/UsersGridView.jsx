import "./UsersGridView.css";
import { getHiddenEmail } from "./getHiddenEmail";




export const UsersGridView = ({ filteredUsers }) => {

    return (
        <ul className="userWrapperGrid">
            {filteredUsers.map((user, index) => (
                <li className="gridView card" key={index}>
                    <img src={user.picture.large} alt="" />
                    <div className="infoGrid">
                        <p className="userNameGrid">{user.name.first}</p>
                        <p className="userEmailGrid">email: {getHiddenEmail(user)}</p>
                        <p className="userDobGrid">date of birth: {user.dob.date.slice(0, 10).split("-").reverse().join("-")} </p>
                    </div>
                </li>
            ))
            }
        </ul>
    );
};






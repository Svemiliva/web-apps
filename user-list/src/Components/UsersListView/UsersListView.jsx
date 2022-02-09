import "./UsersListView.css";


export const UsersListView = ({ filteredUsers }) => {

    return (
        <ul className="userWrapperList">
            {filteredUsers.map((user, index) => (
                <li className="listView" key={index}>
                    <img src={user.picture.large} alt="" className="circle" />
                    <div className="infoList">
                        <p className="userName">name: {user.name.first}</p>
                        <p className="userEmail">email: {user.email}</p>
                        <p className="userDob">date of birth: {user.dob.date.slice(0, 10).split("-").reverse().join("-")} </p>
                    </div>
                </li>
            ))
            }
        </ul>
    );
};
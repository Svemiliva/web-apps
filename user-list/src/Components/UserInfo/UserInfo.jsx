import "./UserInfo.css";

export const UserInfo = ({ name, email, dob }) => {
    return (
        <div class="info">
            <p className="name">
                name: {name}
            </p>
            <p className="email">
                email: {email}
            </p>
            <p  className="dob">
                date of birth: {dob}
            </p>
        </div>
    )
}
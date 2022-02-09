import "./Users.css";
import { UsersListView } from "../UsersListView/UsersListView";
import { UsersGridView } from "../UsersGridView/UsersGridView";



export const Users = ({ isListView, users, filteredUsers }) => {
    return (
        isListView ? <UsersListView users={users} filteredUsers={filteredUsers} /> : <UsersGridView users={users} filteredUsers={filteredUsers} />
    )
}

import './App.css';
import { Header } from "./Components/Header/Header";
import { Users } from "./Components/Users/Users";
import { Footer } from "./Components/Footer/Footer";
import { Button } from "./Components/Button/Button";
import { Button2 } from './Components/Button2/Button2';
import { Input } from './Components/Input/Input';
import { useEffect, useState } from 'react';
import { getUsers } from './Services/userService';



function App() {

  const [isListView, setIsListView] = useState(true);
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);



  const onLayoutChange = () => {
    setIsListView(!isListView);
  };

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setFilteredUsers(users);
    });
  }, []);



  const onRefresh = () => {
    getUsers()
      .then((users) => {
        setUsers(users);
        setFilteredUsers(users);
        setInputValue("");
      });
  };



  const onTyping = (event) => {
    setInputValue(event.target.value);
    const filtUsers = users.filter(user => user.name.first.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredUsers(filtUsers);
    console.log(filteredUsers);
  }


  return (
    <div className="App">
      <Header />
      <Button isListView={isListView} onLayoutChange={onLayoutChange} />
      <Button2 onRefresh={onRefresh} />
      <Input inputValue={inputValue} onChange={onTyping} />
      <Users isListView={isListView} users={users} filteredUsers={filteredUsers} />
      <Footer />
    </div>
  );
}

export default App;

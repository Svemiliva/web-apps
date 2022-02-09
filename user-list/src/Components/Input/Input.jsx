import "./Input.css";

export const Input = ({ onChange, inputValue }) => {
    return (
        <input value={inputValue} onChange={onChange} id="searchInput" placeholder="Search for ..." type="text" />
    )
}

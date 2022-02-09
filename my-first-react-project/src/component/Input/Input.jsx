import "./Input.css"


export const Input = ({ onChange }) => {

    return (
        <input onChange={onChange} id="searchInput" placeholder="Search for ..." type="text" />
    )
}
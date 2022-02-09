import "./Button2.css";


export const Button2 = ({ onRefresh }) => {
    return (
        <button className="button2" onClick={onRefresh}>Refresh page</button>
    )
}
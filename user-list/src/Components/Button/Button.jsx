import "./Button.css";


export const Button = ({isListView, onLayoutChange}) => {

    const buttonText = (isListView) ? "Change to Grid View" : "Change to List View";

    return (
        <button className="buttonClass" onClick={onLayoutChange}>{buttonText}</button>
    )
}
import "./StoriesStyles.css";

function StoriesData(props) {
    return (
        <div className="s-card">
            <div className="s-image">
                <img src={props.image} alt="" />
                <h4>{props.heading}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default StoriesData;
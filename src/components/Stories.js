import "./StoriesStyles.css";
import StoriesData from "./StoriesData";
import Story1 from "../assets/3159233.jpg";
import Story2 from "../assets/3159238.jpg";
import Story3 from "../assets/zVgcOq.jpg";
import Story4 from "../assets/zVgcOq.jpg";

function Stories() {
    return (
        <div className="story">
            <h1>We create Stories.</h1>
            <p>A killer narrative will turn your readers into raving fans.</p>
            <div className="storiescard1">
                <StoriesData
                    image={Story1}
                    heading="OVERCOMING CREATIVE BLOCK"
                    text="Brian Gardner . May 1, 2017."
                />
                <StoriesData
                    image={Story2}
                    heading="WHY COMMUNICATION IS KEY"
                    text="Brian Gardner . May 1, 2017."
                />
            </div>
            <div className="storiescard2">
                <StoriesData
                    image={Story3}
                    heading="THE PATH OF LEAST RESISTANCE"
                    text="Brian Gardner . May 1, 2017."
                />
                <StoriesData
                    image={Story4}
                    heading="THE PATH OF LEAST RESISTANCE"
                    text="Brian Gardner . May 1, 2017."
                />
            </div>
        </div>
    )
}

export default Stories; 
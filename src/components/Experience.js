import "./ExperienceStyles.css";

const Experience = (props) => {
    return (
        <div className="experience">
            <h1>We build experience</h1>
            <p>A minimalist approach is the only way to design a website</p>
            <div className="first-exp">
                <div className="exp-text">
                    <h2>DESIGN</h2>
                    <p>With an emphasis on topography, and mobile-optimized
                        design, your website will look absolutely breathtaking.
                    </p>
                    <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
                </div>
                <div className="exp-text2">
                    <h2>CONTENT</h2>
                    <p>Our team will teach you the art of writing audience-focused content that will
                        help you achieve the success you truly deserve.
                    </p>
                    <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
                </div>
                <div className="exp-text3">
                    <h2>STRATEGY</h2>
                    <p>We help creative entrepreneurs build their digital business by focussing on three
                        key elements of a successful onlie platform
                    </p>
                    <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
                </div>
            </div>

        </div>
    )
}

export default Experience;
import "./FooterStyles.css";

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h4>Hit the ground running with a minimalist look.
                        <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Footer;
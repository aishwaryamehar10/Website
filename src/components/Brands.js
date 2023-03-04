import "./BrandsStyles.css";

function Brands(props) {
    return (
        <>
            <div className={props.cName}>
                <img alt="zVgcOq.jpg" src={props.brandImg} />
                <div className="brand-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>

                    <div className="first-brand1">
                        <h4>les avenirs</h4>
                        <h4>avec'simple</h4>
                        <h4>WHITESPACE</h4>
                    </div>
                    <div className="first-brand2">
                        <h4>m.n.mal.sm</h4>
                        <h4>barcelon33</h4>
                        <h4>smoothVanilla</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brands;
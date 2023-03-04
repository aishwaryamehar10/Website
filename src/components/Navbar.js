import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

//creating class component
class Navbar extends Component {
    state = { clicked: false };
    handleclick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItem">
                <h1 className="navbar-logo">
                    <img src="favicon-32x32.png" alt="" />
                </h1>
                <div className="menu-icons" onClick={this.handleclick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href="/" >{item.title}</a>
                            </li>
                        );
                    })}
                    <button>Search</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
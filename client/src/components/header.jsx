import './form.css';
const Header = () => {
    const UserName = localStorage.getItem("userName");
    return(
        <div className="header-container">
            <div className="logo">
                <h2>Logo.</h2>
            </div>
            <div className="menu">
            </div>
            <div className="username-display">
                {localStorage.getItem("Name")}
            </div>
        </div>
    )
}
export default Header;
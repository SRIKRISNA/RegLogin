import { useNavigate } from 'react-router-dom';
import './form.css';

const Sidebar = () => {
    let Navigate = useNavigate();
    
    const LogOutHandler = ()=>{
        localStorage.clear();
        Navigate('/', {replace:true});
    }

    return(
        <div className="sidebar-container">
            <div className="logo">
                <h2 style={{color:"blue"}}>To do lists</h2>
                <h4>History</h4>
            </div>
            <div className="sideitems">

            </div>
            <div className="username-display">
                <div className="logout">
                    <button id='b-logout' type='submit' onClick={(e)=>LogOutHandler(e)}>LogOut</button>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;
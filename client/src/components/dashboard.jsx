import { useState, useEffect } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Dashboard() {

    const [todoData, setTodoData] = useState([]);
    const [start, setStart] = useState(false);
    const [pause, setPause] = useState(false);
    const [end, setEnd] = useState(false);

    // const [startTime, setStartTime] = useState(0);
    const [totalTime, setTotalTime] = useState(null);
    const [completed, setCompleted] = useState(false);
    const [ongoing, setOngoing] = useState(false);
    // const [elapsed, setElapsed] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [activity, setActivity] = useState({activity: ""});

    useEffect(() => {
        fetch('http://localhost:5000/todo', {
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                Authorization : localStorage.getItem("token")
            },
        }).then((res) => res.json())
        .then((res)=>setTodoData(res))
        .catch((err)=> console.log(err));
    }, []);

    const handleStart = () =>{

    }
    const handlePause = () => {

    }
    const handleResume = () => {

    }
    const handleEnd = () => {

    }
    const handleActivity = (e)=>{
        e.preventDefault();
        fetch('http://localhost:5000/todo/addtodo',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization : localStorage.getItem("token")
            },
            body: JSON.stringify(activity)
        }).then((res)=> res.json())
        .then((res)=>{
            setTodoData(res);
        }).catch((err)=> console.log(err));
        setShow(false);
    }
    return (
        <>
            <Header />
            <Sidebar />
            <h1>Hello Dash</h1>
            <div className="dashContainer">
                <div className="addActivity">
                    <Button className='addBtn' onClick={handleShow}>
                        Add Activity
                    </Button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Activity</th>
                            <th>Status</th>
                            <th>Time Taken</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoData.map((ele, index)=>{
                                return(
                                    <th key={index}>
                                        <td>{ele.activity}</td>
                                        <td>{completed ? 'Completed' : ongoing ? 'Ongoing' : `${ele.status}`}</td>
                                        <td>{end ? totalTime : ""}</td>
                                        <td>
                                            {
                                                end === true ? "":
                                                start === false ? <button onClick={(e)=> handleStart(e, ele._id)}> Start </button> :
                                                <div>
                                                    <button onClick={(e) => handleEnd(e, ele._id)}>End</button>
                                                    {
                                                        pause ? <button onClick={(e)=> handleResume(e, ele._id)}>Resume</button> :
                                                        <button onClick={(e) => handlePause(e, ele._id)}>Pause</button>
                                                    }
                                                </div>
                                            }
                                        </td>
                                    </th>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Activity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleActivity}>
                        <div className="activityInput">
                            <input type="text" placeholder='Add new Activity' onChange={(e)=> setActivity({...activity, activity: e.target.value})} />
                            <div className="activitySubmit">
                                <button type="submit" style={{margin:"12px"}}>Save Activity</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

        </>
    )
}
export default Dashboard;
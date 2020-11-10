import React from "react";
import "./Dialogs.css"
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import AddMessageContainer from "./Messages/AddMessageContainer";
import {Redirect} from "react-router-dom";

 export const AuthDialogsRedirectComponent = (props) =>{
    if(!props.auth.isAuth) return <Redirect to={"/login"}/>
    return <Dialogs {...props}/>
}
const Dialogs = (props) => {

    let personElements = props.persons.personData.map(person => <Users name={person.name} id={person.id}  key={person.id}/>)

    const updateMessage=()=>{let messageElement = props.persons.messagesData.map(mess => <Messages message={mess.message} key={mess.id}/>)}
    let messageElement = props.persons.messagesData.map(mess => <Messages message={mess.message} key={mess.id}/>)

    return (

        <>
            <h2 className="ml-5 text-center">Dialogs</h2>
            <div className="container row mt-4">
                <div className="col-4 border-right">
                    <h3 className="text-center">Users</h3>
                    <ul className="list-unstyled">
                        {personElements}
                    </ul>
                </div>
                <div className="col-7">
                    <h3 className="text-center">Messages</h3>
                    <ul className="list-unstyled">
                        {messageElement}
                    </ul>
                </div>
            </div>
            <AddMessageContainer upDateMessage={updateMessage}/>
        </>
    )
}

export default Dialogs

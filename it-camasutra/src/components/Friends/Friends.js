import React from "react";
import Friend from "./Friend";


const Friends = (props) => {
    let myFriends = props.friends.personData.map(friend => <Friend name ={friend.name} ava={friend.avatar} key={friend.id}/>)
    return (
        <div className="p-2 text-light ">
            <h2>Friends</h2>
            <div className="container row">
                {myFriends}
            </div>
        </div>
    )
}

export default Friends
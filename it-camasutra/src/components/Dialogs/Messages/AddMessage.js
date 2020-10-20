import React from "react";
const AddMessage = (props) => {
    let newMessValue = React.createRef()

    const addMessage = () => props.addPost()
    const updateMessage = () => {
        let text = newMessValue.current.value
        props.updatePost(text)}

    return (
        <div className="h2  col mt-4">
            <p className="text-center mb-3">Добавить сообщение</p>
            <div className="col mb-4">
                <textarea className="w-100 h5 border shadow-none" rows='5' onChange={updateMessage} value={props.value} ref={newMessValue}/>
                <button
                    className="p-2 text-light col-3 h6 shadow-none border-0 bg-success btn-outline-success rounded"
                    onClick={addMessage}
                >Add Message</button>

            </div>

        </div>
    )
}

export default AddMessage
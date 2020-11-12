import React from "react";
import "./Profile.css"

class ProfileStatus extends React.Component {
    state = {
        editMode:false,
        status: this.props.status
    }

    editMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false

        })
        this.props.updateStatus(this.state.status)
    }
onStatusChange=(evt)=>{
        this.setState({
            status: evt.currentTarget.value
        })

}
componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({ status:this.props.status})
        }}

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div className="container">
                    <p className="font-weight-bold">My Status</p>
                    <p onClick={this.editMode}
                       className="text-left font-weight-bold">{this.props.status || "Нет статуса"}</p>
                </div>}
                {this.state.editMode &&
                <div className="container">
                    <label>Ваш статус на сегодня:
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true} onBlur={this.deactivateEditMode}
                            className="p-1 rounded border-bottom border-left-0  border-top-0"
                            value={this.state.status}/>
                    </label>

                </div>}
            </>
        )
    }
}

export default ProfileStatus

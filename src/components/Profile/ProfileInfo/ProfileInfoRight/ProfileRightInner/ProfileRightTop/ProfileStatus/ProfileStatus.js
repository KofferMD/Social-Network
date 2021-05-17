import React from "react";
import s from './ProfileStatus.module.css'

class ProfileStatus  extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactiveEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.current.target.value
        });
    }

    render() {
        return (
            <div className={s.profileStatus}>
                {!this.state.editMode &&
                    <div className={s.profileStatusInnerSpan}>
                        <span  className={s.profileStatusSpan}
                            onDoubleClick={this.activeEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input className={s.profileStatusInput}
                               onChange={this.onStatusChange}
                            onDoubleClick={this.deactiveEditMode}
                               autoFocus={true}
                               onBlur={this.deactiveEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
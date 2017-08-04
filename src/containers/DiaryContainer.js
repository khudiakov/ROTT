import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setActiveActivity } from "../actions/uistate";
import '../styles/Diary.sass';

class Diary extends Component {
    render() {
        return (
            <div className="Diary">
                <h2>Diary</h2>
                {this.props.activities
                    .map((activity) => (
                        <a key={activity.id} href="#" onClick={() => this.props.openActivity(activity.id)}>
                            <div>
                                <h2>{activity.title}</h2>
                                <h3>{activity.start.toString()}</h3>
                            </div>
                        </a>
                    ))
                }
            </div>            
        );
    }
}




const mapDispatchToProps = (dispatch) => ({
    openActivity: (activityId) =>{dispatch(setActiveActivity(activityId))}
})

const DiaryContainer = connect(null, mapDispatchToProps)(Diary)
export default DiaryContainer;
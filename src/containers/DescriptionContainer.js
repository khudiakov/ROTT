import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import '../styles/Description.sass';
import { DESCRIPTION } from "../utils/description";
import { setActivityDescription } from "../actions/projects";

const DescriptionRead = (props) => (
    <div style={{flex: 1}}>
        <h1>{props.title}</h1>
        <ReactMarkdown source={props.body} />
    </div>
)

class DescriptionEditor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.title,
            body: props.body
        }
    }

    onChange(event) {
        const target = event.target;
        this.setState({[target.name]: target.value});
    }

    render() {
        return (
            <div style={{flex: 1}}>
                <form onSubmit={(event) => { event.preventDefault(); this.props.onSave(this.state.title, this.state.body) }}>
                    <input name="title" onChange={this.onChange.bind(this)} value={this.state.title} />
                    <textarea name="body" onChange={this.onChange.bind(this)} value={this.state.body} />

                    <input type="submit" value="Save" />
                </form>
            </div>
        )
    }
}

class Description extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false
        }
    }

    render() {
        let title = DESCRIPTION.title;
        let body = DESCRIPTION.body;

        if (this.props.activity != null) {
            title = this.props.activity.title;
            body = this.props.activity.body;
        }

        const content = (this.state.edit?
                         <DescriptionEditor title={title} body={body} onSave={(title, body)=>{
                             this.props.onSave(title, body);
                             this.setState({edit: false});
                            }} />:
                         <DescriptionRead title={title} body={body} />
                        )

        return (
            <div className="Description">
                <h2>Description</h2>
                {content}
                <button onClick={() => {this.setState({edit: !this.state.edit})}} >edit</button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch, props) => ({
    onSave: (title, body) => {
        dispatch(setActivityDescription(props.activity.id, title, body))
    }
})

const DescriptionContainer = connect(null, mapDispatchToProps)(Description)
export default DescriptionContainer;
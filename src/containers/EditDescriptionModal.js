import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

const customContentStyle = {
    width: '90%',
    height: '90%',
    maxWidth: 'none',
  };
  
  /**
   * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
*/
export default class EditDescriptionModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            value: this.props.body
        }

        this.handleOpen = () => {
            this.setState({open: true});
        };

        this.handleClose = () => {
            this.setState({open: false});
        };

        this.handleChange = (event) => {
            this.setState({value: event.target.value});
        }

    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={()=>{
                    this.handleClose();
                    this.props.onSave(this.state.value);
                }}
            />,
        ];

        return (
            <div>
                <IconButton iconStyle={{color: 'white'}} className="icon__button" iconClassName="material-icons" touch={true} onTouchTap={this.handleOpen} >
                        mode_edit
                </IconButton>
                <Dialog
                    actions={actions}
                    modal={true}
                    contentStyle={customContentStyle}
                    open={this.state.open}
                >
                    <TextField
                        floatingLabelText="Type here what you did..."
                        multiLine={true}
                        fullWidth={true}
                        rows={6}
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                </Dialog>
            </div>
        );
    }
}
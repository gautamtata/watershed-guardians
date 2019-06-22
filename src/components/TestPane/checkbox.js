import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class CheckboxLabels extends Component {
  state = {
    checked: this.props.initializeTrue ? true : false,
  };

  handleChange = () => {
    this.props.onClick();

    this.setState({ checked: !this.state.checked });
  };

  render() {
    let label = this.props.label;
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChange}
              value="checked"
              color="primary"
            />
          }
          label={label}
        />
      </FormGroup>
    );
  }
}

export default CheckboxLabels;

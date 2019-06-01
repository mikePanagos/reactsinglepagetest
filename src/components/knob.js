import React from 'react';
import Knob from 'react-canvas-knob';

class Knobs extends React.Component {
    state = { value: 50 };

    handleChange = (newValue) => {
        console.log(newValue);

        this.setState({ value: newValue });
    };

    render() {
        return (
            <div className="col s4 m1">
                <div className="row m1 s4 ">
                    <label className="center" htmlFor="">Knob</label>
                </div>

                <div className="row m1 s4">
                    <Knob min='0' max="127"
                        angleArc="270"
                        angleOffset="225"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}
export default Knobs;
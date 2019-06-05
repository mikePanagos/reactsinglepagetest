import React from 'react';
import Knob from 'react-canvas-knob';
import { sendPC } from '../script';

class Knobs extends React.Component {
    state = { value: 50 };

    handleChange = (newValue) => {
        console.log(newValue);
        sendPC(1, newValue, this.props.midi);

        this.setState({ value: newValue });
    };

    render() {

        return (
            <div className="col s4 m1">
                <div className="row m1 s4 ">
                    <label className="center" htmlFor="">Knob</label>
                </div>

                <div className="row m1 s4">
                    <Knob min={0} max={127}
                        inputColor="#00FF00"
                        fgColor="#00FF00"  
                        angleArc={270}
                        angleOffset={225}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}
export default Knobs;
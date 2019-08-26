import React, { Component } from "react";
import { connect } from "react-redux";
import { lockColor } from "../../actions";
import PaletteTile from "../../components/PaletteTile/PaletteTile.js";
import PaletteForm from '../PaletteForm/PaletteForm';
import "./PaletteDisplay.scss";
import ColorScheme from "color-scheme";

export class PaletteDisplay extends Component {
    generateColors = () => {
        let randomHue = Math.floor(Math.random() * 1000 + 1);
        let scheme = new ColorScheme();
        scheme
        .from_hue(randomHue)
        .scheme("contrast")
        .variation("hard");

        var colors = scheme.colors().splice(0, 5);
        this.setState({colors})
        this.props.setCurrentColors(colors);
    };

    render = () => {
    console.log(this.props.currentColors);

    const displaySwatches = this.props.currentColors.map((color, index) => {
        return <PaletteTile key={'pal-' + index} id={color} isLocked={false} hexCode={color.toUpperCase()} />;
    });

    return (
        <section className="palette-display">
            <div className='palette-tiles'>{displaySwatches}</div>
            <button
                type="button"
                className="generate-new-palette-button"
                onClick={this.generateColors}
                >
                Generate New Palette
            </button>
          <PaletteForm />
        </section>
    );
    };

}

export const mapStateToProps = state => ({
    currentColors: state.colors
});

export const mapDispatchToProps = dispatch => ({
    lockColor: color => dispatch(lockColor(color))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaletteDisplay);

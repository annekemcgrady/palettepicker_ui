import React, { Component } from "react";
import { connect } from "react-redux";

import { lockColor } from "../../actions";
import PaletteTile from "../../components/PaletteTile/PaletteTile.js";
import PaletteForm from '../PaletteForm/PaletteForm';
import "./PaletteDisplay.scss";
import ColorScheme from "color-scheme";

export class PaletteDisplay extends Component {
    constructor() {
    super()
    this.state = {
        colors: []
    }
}
    generateColors = () => {
        let randomHue = Math.floor(Math.random() * 1000 + 1);
        let scheme = new ColorScheme();
        scheme
        .from_hue(randomHue)
        .scheme("contrast")
        .variation("hard");


        let colors = scheme.colors().splice(0, 5);
        let colorObjects = colors.map(color => {
            return {hexCode: color, isLocked: false}
        })

        const evaluatedColors =  this.state.colors.map((color, index) => {
            return color.isLocked ? color : colorObjects[index]
          })
          if(!evaluatedColors.length) {
              this.setState({colors: colorObjects})
          } else {
              this.setState({ colors: evaluatedColors });
          }
    };

    lockColor = (id) => {
        const lockedColors = this.state.colors.map(tile => {
            if(tile.hexCode === id) {
            tile.isLocked = !tile.isLocked
            }
            return tile
        })
        this.setState({ colors: lockedColors})
    }

    render = () => {
  console.log(this.state.colors)
    const displaySwatches = this.state.colors.map((color, index) => {
        return <PaletteTile key={'pal-' + index} id={color.hexCode} isLocked={color.isLocked} hexCode={color.hexCode.toUpperCase()} lockColor={this.lockColor} />;
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




export default connect(
    mapStateToProps)(PaletteDisplay);

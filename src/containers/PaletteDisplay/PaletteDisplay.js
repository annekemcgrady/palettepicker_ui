import React, { Component } from "react";
import { connect } from "react-redux";
import { getColors } from "../../actions";
import PaletteTile from "../../components/PaletteTile/PaletteTile.js";
import "./PaletteDisplay.scss";
import ColorScheme from "color-scheme";

export class PaletteDisplay extends Component {
  generateColors = () => {
    let randomHue = Math.floor(Math.random() * 500 + 1);
    let scheme = new ColorScheme();
    scheme
      .from_hue(randomHue)
      .scheme("contrast")
      .variation("hard");

    var colors = scheme.colors().splice(0, 5);
    // this.setState({colors})
    this.props.setCurrentColors(colors);
  };

  render = () => {
    console.log(this.props.currentColors);

    const displaySwatches = this.props.currentColors.map(color => {
      return <PaletteTile key={Date.now()} isLocked={false} hexCode={color} />;
    });

    return (
      <section className="palette-display">
        {displaySwatches}
        <button
          type="button"
          className="generate-new-palette"
          onClick={this.generateColors}
        >
          Generate New Palette
        </button>
      </section>
    );
  };
}

export const mapStateToProps = state => ({
  currentColors: state.colors
});

export const mapDispatchToProps = dispatch => ({
  setCurrentColors: newColors => dispatch(getColors(newColors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteDisplay);

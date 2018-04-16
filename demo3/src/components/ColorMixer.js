/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Slider,
  StyleSheet,
} from 'react-native';

class ColorSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorValue: 0,
    };
  }

  componentWillMount() {
    this.setState({colorValue: this.props.initValue});
  }

  render() {
    return (
      <View style={styles.containerSlider}>
        <Text style={{width: 50,
            alignSelf: 'center',
            padding: 5,
            textAlign: 'center',
            color: `${this.props.color}`}}>
            {this.props.color}
        </Text>

        <Slider
          style={{height: 50, flex: 100}}
          maximumValue={255}
          minimumValue={0}
          step={1}
          minimumTrackTintColor={this.props.color}
          thumbTintColor={this.props.color}
          value={this.props.initValue}
          onValueChange={ (val) => {
            this.setState({colorValue: val});
            this.props.callback(this.props.color, val);
            }
          }
          ></Slider>

        <Text style={{width: 50,
          alignSelf: 'center',
          padding: 5,
          textAlign: 'center',
          color: 'gray',
          borderColor: `${this.props.color}`,
          borderWidth: 2,
          borderRadius: 5, }}>
          {this.state.colorValue}
        </Text>

      </View>
    );
  }
}
const initColor = 15
export default class ColorMixer extends Component {
  constructor(props){
    super(props);
    this.state = {
      red : 0,
      green : 0,
      blue : 0,
      mix: ''
    };

  }

  componentWillMount() {
    // this.setState({red: initColor});
    // this.setState({green: initColor});
    // this.setState({blue: initColor});
    // this.setState({mix: '#'+initColor.toString(16)+initColor.toString(16)+initColor.toString(16)});
    console.info('check')
  }

  onChangeColorSlider = (color, value) => {
    switch (color) {
      case 'red':
        this.setState({red: value});
        break;
      case 'green':
        this.setState({green: value});
        break;
      case 'blue':
        this.setState({blue: value});
        break;
    }
    this.setState({mix: '#'+this.state.red.toString(16)+this.state.green.toString(16)+this.state.blue.toString(16)})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerSliders}>
          <ColorSlider initValue={initColor} color='red' callback={this.onChangeColorSlider}></ColorSlider>
          <ColorSlider initValue={initColor} color='green' callback={this.onChangeColorSlider}></ColorSlider>
          <ColorSlider initValue={initColor} color='blue' callback={this.onChangeColorSlider} ></ColorSlider>

        </View>
        <Text >{this.state.mix}</Text>
        <View style={[styles.containerColor,
            {backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`}]}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSliders: {
    flex: 50,
    margin: 10,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  containerColor: {
    flex: 50,
    margin: 10,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 5
  },
  containerSlider: {
    flexDirection: 'row',
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10
  },

});

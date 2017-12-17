import React, {PureComponent} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';

const {width} = Dimensions.get('window');

export default class HexAdder extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      problem: this.generate(),
      guess: null
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.problem}>
          <View>
            <View>
              <Text style={styles.term1}>{hex(this.state.problem.term1)}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.plus}>+</Text>
              <Text style={styles.term2}>{hex(this.state.problem.term2)}</Text>
            </View>
          </View>
        </View>

        <TouchableHighlight onPress={this.clearGuess}>
          <View style={styles.display}>
            <Text style={styles.keyPlace}>_</Text>
            <Text style={styles.keyText}>{hex(this.state.guess)}</Text>
            <Text style={styles.keyPlace}>_</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.keypad}>
          <TouchableHighlight onPress={this.touchF}><View style={styles.key}><Text style={styles.keyText}>F</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touchE}><View style={styles.key}><Text style={styles.keyText}>E</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touchD}><View style={styles.key}><Text style={styles.keyText}>D</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touchC}><View style={styles.key}><Text style={styles.keyText}>C</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touchB}><View style={styles.key}><Text style={styles.keyText}>B</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touchA}><View style={styles.key}><Text style={styles.keyText}>A</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touch9}><View style={styles.key}><Text style={styles.keyText}>9</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touch8}><View style={styles.key}><Text style={styles.keyText}>8</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touch7}><View style={styles.key}><Text style={styles.keyText}>7</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touch6}><View style={styles.key}><Text style={styles.keyText}>6</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touch5}><View style={styles.key}><Text style={styles.keyText}>5</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touch4}><View style={styles.key}><Text style={styles.keyText}>4</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touch3}><View style={styles.key}><Text style={styles.keyText}>3</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touch2}><View style={styles.key}><Text style={styles.keyText}>2</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touch1}><View style={styles.key}><Text style={styles.keyText}>1</Text></View></TouchableHighlight>
          <TouchableHighlight onPress={this.touch0}><View style={styles.key}><Text style={styles.keyText}>0</Text></View></TouchableHighlight>
        </View>
      </View>
    );
  }

  generate = () => {
    const seen = [];
    const unseen = [];

    for (var i = 0; i <= 3; i++) {
      let a = Math.random() < 0.5 ? seen : unseen;
      a.push(2 ** i);
    }

    if (unseen.length === 0) return this.generate();

    const term1 = sum(seen);
    const term2 = pick(unseen);
    return {term1, term2, sum: term1 + term2};
  }

  clearGuess = () => {
    this.setState({
      guess: null
    })
  }

  touch0 = () => {
    this.touch(0);
  }

  touch1 = () => {
    this.touch(1);
  }

  touch2 = () => {
    this.touch(2);
  }

  touch3 = () => {
    this.touch(3);
  }

  touch4 = () => {
    this.touch(4);
  }

  touch5 = () => {
    this.touch(5);
  }

  touch6 = () => {
    this.touch(6);
  }

  touch7 = () => {
    this.touch(7);
  }

  touch8 = () => {
    this.touch(8);
  }

  touch9 = () => {
    this.touch(9);
  }

  touchA = () => {
    this.touch(10);
  }

  touchB = () => {
    this.touch(11);
  }

  touchC = () => {
    this.touch(12);
  }

  touchD = () => {
    this.touch(13);
  }

  touchE = () => {
    this.touch(14);
  }

  touchF = () => {
    this.touch(15);
  }

  touch = (v) => {
    const g = this.state.guess || 0;
    const newG = 16 * g + v;

    if (newG === this.state.problem.sum) {
      this.setState({
        guess: null,
        problem: this.generate()
      });
    } else {
      this.setState({
        guess: newG 
      });
    }
  }
}

const term = {
  fontSize:56 
};

const margin = 8;
const padding = 2;
const borderWidth = 1;
const buttonWidth = (width - 5 * margin - 8 * borderWidth - 8 * padding) / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch'
  },

  row: {
    flexDirection: 'row',
  },

  problem: {
    margin: 32,
    padding: 8,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'stretch',
  flexDirection: 'row',
        justifyContent: 'space-around',
  },

  term1: {
    ...term,
    textAlign: 'right'
  },

  plus: {
    ...term
  },

  term2: {
    ...term,
    textAlign: 'right'
  },

  display: {
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 32,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  key: {
    margin,
    marginTop: 0,
    padding: 8,
    borderWidth: 1,
    width: buttonWidth,
    height: buttonWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },

  keyPlace: {
    fontSize:40,
  },

  keyText: {
    fontSize: 40
  }
});


function hex(n) {
  if (n === null) return '';
  return n.toString(16).toUpperCase();
}

function sum(a) {
  return a.reduce((a,b) => a + b, 0)
}

function pick(a) {
  return a[Math.floor(Math.random() * (a.length))];

}

import React, {
  View,
  Image,
  Text,
  TouchableOpacity,
  PanResponder,
  processColor,
  Component,
  StyleSheet,
} from 'react-native';

var CIRCLE_SIZE = 80;
var CIRCLE_COLOR = 'blue';
var CIRCLE_HIGHLIGHT_COLOR = 'green';

var PanResponderExample = React.createClass({
  _panResponder: {},
  _previousLeft: 0,
  _previousTop: 0,
  _circleStyles: {},
  circle: (null : ?{ setNativeProps(props: Object): void }),

  getInitialState: function() {
    return {
      stateID : null,
      moveX : 0,
      moveY : 0,
      dx : 0,
      dy : 0,
      x0 : 0,
      y0 : 0,
      vx : 0,
      vy : 0,
      numberActiveTouches : 0,
    };
  },

  componentWillMount: function() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
    this._previousLeft = 20;
    this._previousTop = 84;
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop
      }
    };
  },

  componentDidMount: function() {
    this._updatePosition();
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{this.state.stateID}</Text>
          <Text>{this.state.moveX}</Text>
          <Text>{this.state.moveY}</Text>
          <Text>{this.state.dx}</Text>
          <Text>{this.state.dy}</Text>
          <Text>{this.state.x0}</Text>
          <Text>{this.state.y0}</Text>
          <Text>{this.state.vx}</Text>
          <Text>{this.state.vy}</Text>
          <Text>{this.state.numberActiveTouches}</Text>
        </View>
        <View
          ref={(circle) => {
            this.circle = circle;
          }}
          style={styles.circle}
          {...this._panResponder.panHandlers}/>
      </View>
    );
  },

  _highlight: function() {
    const circle = this.circle;
    circle && circle.setNativeProps({
      style: {
        backgroundColor: processColor(CIRCLE_HIGHLIGHT_COLOR)
      }
    });
  },

  _unHighlight: function() {
    const circle = this.circle;
    circle && circle.setNativeProps({
      style: {
        backgroundColor: processColor(CIRCLE_COLOR)
      }
    });
  },

  _updatePosition: function() {
    this.circle && this.circle.setNativeProps(this._circleStyles);
  },

  _handleStartShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    // Should we become active when the user presses down on the circle?
    return true;
  },

  _handleMoveShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    // Should we become active when the user moves a touch over the circle?
    return true;
  },

  _handlePanResponderGrant: function(e: Object, gestureState: Object) {
    this._highlight();
  },
  _handlePanResponderMove: function(e: Object, gestureState: Object) {
    //console.log('stateID:'+gestureState.stateID+' moveX:'+gestureState.moveX+' moveY:'+gestureState.moveY);
    this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this._circleStyles.style.top = this._previousTop + gestureState.dy;
    this._updatePosition();
    this.setState({
      stateID : gestureState.stateID,
      moveX : gestureState.moveX,
      moveY : gestureState.moveY,
      dx : gestureState.dx,
      dy : gestureState.dy,
      x0 : gestureState.x0,
      y0 : gestureState.y0,
      vx : gestureState.vx,
      vy : gestureState.vy,
      numberActiveTouches : gestureState.numberActiveTouches,
    });
  },
  _handlePanResponderEnd: function(e: Object, gestureState: Object) {
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  },
});

var styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: CIRCLE_COLOR,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  container: {
    flex: 1,
    paddingTop: 64,
  },
});

module.exports = PanResponderExample;
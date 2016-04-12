import React, {
  View,
  Image,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  Animated,
  Component,
  StyleSheet,
  Platform,
  Dimensions,
  PanResponder,
  Easing,
} from 'react-native';

class Md extends React.Component {
    render() {
      return (
        <View style={styles.box}>
          <View style={styles.hd}><Text style={styles.title}>{this.props.title}</Text></View>
          <View style={styles.bd}>
            {this.props.children}
          </View>
        </View>
      );
    }
};

class DraggableView extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       pan: new Animated.ValueXY(), // inits to zero
     };
     this.state.panResponder = PanResponder.create({
       onStartShouldSetPanResponder: () => true,
       onPanResponderMove: Animated.event([null, {
         dx: this.state.pan.x, // x,y are Animated.Value
         dy: this.state.pan.y,
       }]),
       onPanResponderRelease: () => {
         Animated.spring(
           this.state.pan,         // Auto-multiplexed
           {toValue: {x: 0, y: 0}} // Back to zero
         ).start();
       },
     });
   }
   
   render() {
     return (
       <Animated.View
         {...this.state.panResponder.panHandlers}
         style={this.state.pan.getLayout()}>
         {this.props.children}
       </Animated.View>
     );
   }
 };

class AnimatedExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fadeAnim: new Animated.Value(0),
        parallelOpacity: new Animated.Value(0.2),
        parallelTranslateX: new Animated.Value(0),
        parallelScale: new Animated.Value(0),
        parallelRotate: new Animated.Value(0),
        sequenceOpacity: new Animated.Value(0.2),
        sequenceTranslateX: new Animated.Value(0),
        sequenceScale: new Animated.Value(0),
        sequenceRotate: new Animated.Value(0),
        anim: [1,2,3].map(() => new Animated.Value(0))
      };
    }

    componentWillMount() {
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          duration: 500,
          easing: Easing.linear
        },
      ).start();

      // parallel 同步执行
      Animated.parallel(
        ['parallelTranslateX','parallelOpacity','parallelScale','parallelRotate'].map(property => {
          return Animated.timing(this.state[property],
          {
            toValue: 1,
            duration: 500,
            easing: Easing.linear
          });
        })
      ).start();

      // sequence 顺序执行
      Animated.sequence(
        ['sequenceTranslateX','sequenceOpacity','sequenceScale','sequenceRotate'].map(property => {
          return Animated.timing(this.state[property],
          {
            toValue: 1,
            duration: 500,
            easing: Easing.linear
          });
        })
      ).start();

      Animated.sequence([
        Animated.stagger(200, this.state.anim.map(left => {
          return Animated.timing(left, {
              toValue: 1,
            });
          }).concat(
              this.state.anim.map(left => {
                  return Animated.timing(left, {
                      toValue: 0,
                  });
              })
          )),                               // 三个view滚到右边再还原，每个动作间隔200ms
          Animated.delay(400),              // 延迟400ms，配合sequence使用
          Animated.timing(this.state.anim[0], {
              toValue: 1 
          }),
          Animated.timing(this.state.anim[1], {
              toValue: -1
          }),
          Animated.timing(this.state.anim[2], {
              toValue: 0.5
          }),
          Animated.delay(400),
          Animated.parallel(this.state.anim.map((anim) => Animated.timing(anim, {
              toValue: 0
          })))                              // 同时回到原位置
        ]
      ).start();
    }

    onBack() {
      this.props.navigator.pop();
    }

    render() {
      return (
        <ScrollView>
          <Md title="animated">
            <Animated.View
              style= {{
                opacity: this.state.fadeAnim, // Binds directly
                transform: [
                  {
                    translateX: this.state.fadeAnim.interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: [-240,-100, 0]
                    })
                  },
                  {
                    scale: this.state.fadeAnim.interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: [0, 0.8, 1]
                    })
                  },
                  {
                    rotate: this.state.fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '7200deg']
                    })
                  }
                ]
              }}>
              <View style={{backgroundColor:'#f00',height:100,width:100,borderRadius:20,justifyContent:'center'}}><Text style={{textAlign:'center',color:'#fff'}}>{this.props.componentName} {this.props.id}</Text></View>
            </Animated.View>
          </Md>

          <Md title="parallel">
            <Animated.View
              style= {{
                opacity: this.state.parallelOpacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1]
                }),
                transform: [
                  {
                    translateX: this.state.parallelTranslateX.interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: [-240,-100, 0]
                    })
                  },
                  {
                    scale: this.state.parallelScale.interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: [1, 0.5, 1]
                    })
                  },
                  {
                    rotate: this.state.parallelRotate.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '7200deg']
                    })
                  }
                ]
              }}>
              <View style={{backgroundColor:'#f00',height:100,width:100,borderRadius:20,justifyContent:'center'}}><Text style={{textAlign:'center',color:'#fff'}}>{this.props.componentName} {this.props.id}</Text></View>
            </Animated.View>
          </Md>

          <Md title="sequence">
            <Animated.View
              style= {{
                opacity: this.state.sequenceOpacity.interpolate({
                  inputRange:[0, 1],
                  outputRange:[0, 1]
                }),
                transform: [
                  {
                    translateX: this.state.sequenceTranslateX.interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: [-240,-100, 0]
                    })
                  },
                  {
                    scale: this.state.sequenceScale.interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: [1, 0.5, 1]
                    })
                  },
                  {
                    rotate: this.state.sequenceRotate.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '7200deg']
                    })
                  }
                ]
              }}>
              <View style={{backgroundColor:'#f00',height:100,width:100,borderRadius:20,justifyContent:'center'}}><Text style={{textAlign:'center',color:'#fff'}}>{this.props.componentName} {this.props.id}</Text></View>
            </Animated.View>
          </Md>

          <Md title="sequence/delay/stagger/parallel综合演示">
            <View style={styles.container}>
              <Animated.View
                style={[styles.demo, styles.demo1, {
                  left: this.state.anim[0].interpolate({
                    inputRange: [0,1],
                    outputRange: [0,200]
                  })
                }]}>
                <Text style={styles.text}>我是第1个View</Text>
              </Animated.View>
              <Animated.View
                style={[styles.demo, styles.demo2, {
                  left: this.state.anim[1].interpolate({
                    inputRange: [0,1],
                    outputRange: [0,200]
                  })
                }]}>
                <Text style={styles.text}>我是第2个View</Text>
              </Animated.View>
              <Animated.View
                style={[styles.demo, styles.demo3, {
                  left: this.state.anim[2].interpolate({
                    inputRange: [0,1],
                    outputRange: [0,200]
                  })
                }]}>
                <Text style={styles.text}>我是第3个View</Text>
              </Animated.View>
            </View>
          </Md>

          <Md title="event">
            <DraggableView>
              <View style={{margin:10, padding:10, alignItems: 'center',backgroundColor:'#3385ff'}}>
                <Text style={{fontSize: 15,color:'#fff'}}>Drag</Text>
              </View>
            </DraggableView>
          </Md>

          <TouchableOpacity onPress={() => this.onBack()}>
            <View style={{margin:10, padding:10, alignItems: 'center',backgroundColor:'#3385ff'}}>
              <Text style={{fontSize: 15,color:'#fff'}}>Back!</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      );
    }
};


var styles = StyleSheet.create({
  box:{margin:10,borderWidth:0.5,borderRadius:5,borderColor:'#ccc',backgroundColor:'#fff',marginBottom:10},
  hd:{height:35,paddingTop:7,paddingBottom:7,paddingLeft:10,paddingRight:10,borderBottomWidth:0.5,borderColor:'#ccc',backgroundColor:'#eee',alignItems:'flex-start'},
  bd:{padding:10,alignItems:'center',overflow:'hidden'},
  title:{fontSize:16,color:'#000'},
  container:{margin:30},
  demo:{height:30,backgroundColor:'#0f0',margin:10,position:'relative'},
  demo2:{backgroundColor:'#f00'},
  demo3:{backgroundColor:'#00f'}
});

module.exports = AnimatedExample;
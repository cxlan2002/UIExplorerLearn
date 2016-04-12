import React, {
  View,
  Image,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  Component,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
                   'catalysts for change. Dynamically revolutionize.';
var Md = React.createClass({
  render: function() {
    return (
      <View style={styles.box}>
        <View style={styles.hd}><Text style={styles.title}>{this.props.title}</Text></View>
        <View style={styles.bd}>
          {this.props.content}
        </View>
      </View>
    );
  }
});

//在Android上最多能指定三个按钮 在iOS上你可以指定任意数量的按钮AlertIOS
var AlertExample = React.createClass({
  render: function() {
    return (
      <ScrollView>
        <Md title="default button"
          content = {
            <TouchableOpacity style={styles.wrapper}
              onPress={() => Alert.alert('Alert Title',alertMessage,)}>
              <View style={styles.button}>
                <Text>Alert with message and default button</Text>
              </View>
            </TouchableOpacity>
        }/>

        <Md title="one button"
          content = {
            <TouchableOpacity style={styles.wrapper}
              onPress={() => Alert.alert(
                'Alert Title',
                alertMessage,
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed!')},
                ]
              )}>
              <View style={styles.button}>
                <Text>Alert with one button</Text>
              </View>
            </TouchableOpacity>
        }/>

        <Md title="two button"
          content = {
            <TouchableOpacity style={styles.wrapper}
              onPress={() => Alert.alert(
                'Alert Title',
                alertMessage,
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                  {text: 'OK', onPress: () => console.log('OK Pressed!')},
                ]
              )}>
              <View style={styles.button}>
                <Text>Alert with two buttons</Text>
              </View>
            </TouchableOpacity>
        }/>

        <Md title="three button"
          content = {
            <TouchableOpacity style={styles.wrapper}
              onPress={() => Alert.alert(
                'Alert Title',
                alertMessage,
                [
                  {text: 'Foo', onPress: () => console.log('Foo Pressed!')},
                  {text: 'Bar', onPress: () => console.log('Bar Pressed!')},
                  {text: 'Baz', onPress: () => console.log('Baz Pressed!')},
                ]
              )}>
              <View style={styles.button}>
                <Text>Alert with three buttons</Text>
              </View>
            </TouchableOpacity>
        }/>

        <Md title="many button"
          content = {
            <TouchableOpacity style={styles.wrapper}
              onPress={() => Alert.alert(
                'Alert Title',
                alertMessage,
                '..............'.split('').map((dot, index) => ({
                  text: 'Button ' + index,
                  onPress: () => console.log('Pressed ' + index)
                }))
              )}>
              <View style={styles.button}>
                <Text>Alert with many buttons</Text>
              </View>
            </TouchableOpacity>
        }/>
      </ScrollView>
    );
  },
});

var styles = StyleSheet.create({
  box:{margin:10,borderWidth:0.5,borderRadius:5,borderColor:'#ccc',backgroundColor:'#fff',marginBottom:10},
  hd:{height:35,paddingTop:7,paddingBottom:7,paddingLeft:10,paddingRight:10,borderBottomWidth:0.5,borderColor:'#ccc',backgroundColor:'#eee',alignItems:'flex-start'},
  bd:{padding:10},
  title:{fontSize:16,color:'#000'},

});

module.exports = AlertExample;
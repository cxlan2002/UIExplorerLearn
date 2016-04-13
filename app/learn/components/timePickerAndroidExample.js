import React, {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TimePickerAndroid,
  Component,
  StyleSheet,
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

class TimePickerAndroidExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeText: 'pick a time',
    };
  }

  //异步获取
  async showTimePicker() {
    try {
      var newState = '';
      const {action, hour, minute} = await TimePickerAndroid.open(
      // {
      //   hour: 14,
      //   minute: 0,
      //   is24Hour: true, // default
      // }
      );

      if (action === TimePickerAndroid.dismissedAction) {
         newState = 'dismissed';
      } else {
        var m = minute<10 ? '0'+minute : minute;
        newState = hour +':'+ m;
      };

      this.setState({
        timeText: newState
      });
    } catch ({code, message}) {
      console.warn(`Error in example: `, message);
    }
  }

  render() {
    return (
      <ScrollView>
        <Md title="Simple time picker">
          <TouchableOpacity
            onPress={() => this.showTimePicker()}>
            <Text>{this.state.timeText}</Text>
          </TouchableOpacity>
        </Md>
      </ScrollView>
    );
  }
};

var styles = StyleSheet.create({
  box:{margin:10,borderWidth:StyleSheet.hairlineWidth,borderRadius:5,borderColor:'#000',backgroundColor:'#fff',marginBottom:10},
  hd:{height:35,paddingTop:7,paddingBottom:7,paddingLeft:10,paddingRight:10,backgroundColor:'#eee',alignItems:'flex-start',borderTopLeftRadius:5,borderTopRightRadius:5,},
  bd:{padding:10,borderTopWidth:StyleSheet.hairlineWidth,borderColor:'#000',alignItems:'center',overflow:'hidden'},
  title:{fontSize:16,color:'#000'},
});

module.exports = TimePickerAndroidExample;
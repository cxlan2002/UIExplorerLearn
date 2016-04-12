import React, {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  DatePickerAndroid,
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

class DatePickerAndroidExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presetDate: new Date(2020, 4, 5),
      allDate: new Date(2020, 4, 5),
      simpleText: 'pick a date',
      minText: 'pick a date, no earlier than today',
      maxText: 'pick a date, no later than today',
      presetText: 'pick a date, preset to 2020/5/5',
      allText: 'pick a date between 2020/5/1 and 2020/5/10',
    };
  }

  //异步获取
  async showPicker(stateKey, options) {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);      
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  }

  render() {
    return (
      <ScrollView>
        <Md title="Simple date picker">
          <TouchableOpacity
            onPress={() => this.showPicker('simple')}>
            <Text>{this.state.simpleText}</Text>
          </TouchableOpacity>
        </Md>

        <Md title="Date picker with pre-set date">
          <TouchableOpacity
            onPress={() => this.showPicker('preset', {date: this.state.presetDate})}>
            <Text>{this.state.presetText}</Text>
          </TouchableOpacity>
        </Md>

        <Md title="Date picker with minDate">
          <TouchableOpacity
            onPress={() => this.showPicker('min', {
              minDate: new Date(),
            })}>
            <Text>{this.state.minText}</Text>
          </TouchableOpacity>
        </Md>

        <Md title="Date picker with maxDate">
          <TouchableOpacity
            onPress={() => this.showPicker('max', {
              maxDate: new Date(),
            })}>
            <Text>{this.state.maxText}</Text>
          </TouchableOpacity>
        </Md>

        <Md title="Date picker with all options">
          <TouchableOpacity
            onPress={() => this.showPicker('all', {
              date: this.state.allDate,
              minDate: new Date(2020, 1, 1),
              maxDate: new Date(2020, 4, 10),
            })}>
            <Text>{this.state.allText}</Text>
          </TouchableOpacity>
        </Md>
      </ScrollView>
    );
  }
};

var styles = StyleSheet.create({
  box:{margin:10,borderWidth:0.5,borderRadius:5,borderColor:'#ccc',backgroundColor:'#fff',marginBottom:10},
  hd:{height:35,paddingTop:7,paddingBottom:7,paddingLeft:10,paddingRight:10,borderBottomWidth:0.5,borderColor:'#ccc',backgroundColor:'#eee',alignItems:'flex-start'},
  bd:{padding:10,alignItems:'center',overflow:'hidden'},
  title:{fontSize:16,color:'#000'},
});

module.exports = DatePickerAndroidExample;
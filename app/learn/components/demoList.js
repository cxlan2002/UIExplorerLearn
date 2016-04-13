import React, {
  TouchableOpacity,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  ScrollView,
  Alert,
  ToolbarAndroid,
  BackAndroid,
} from 'react-native';

//component
var DrawerLayoutAndroidExample = require('./drawerLayoutAndroidExample');
var ImageExample = require('./imageExample');
var ListViewExample = require('./listViewExample');
var ToolbarAndroidExample = require('./toolbarAndroidExample');
var PickerExample = require('./pickerExample');
var ProgressBarExample = require('./progressBarExample');
var ScrollViewExample = require('./scrollViewExample');
var StatusBarExample = require('./statusBarExample');
var SwitchExample = require('./switchExample');
var TextInputExample = require('./textInputExample');
var ViewPagerAndroidExample = require('./viewPagerAndroidExample');
var WebViewExample = require('./webViewExample');
var ModalExample = require('./modalExample');

//API
var AlertExample = require('./alertExample');
var AnimatedExample = require('./animatedExample');
var AppStateExample = require('./appStateExample');
var CameraRollExample = require('./cameraRollExample');
var ClipBoardExample = require('./clipBoardExample');
var DatePickerAndroidExample = require('./datePickerAndroidExample');
var DimensionsExample = require('./dimensionsExample');
var LinkingExample = require('./linkingExample');
var NetInfoExample = require('./netInfoExample');
var PanResponderExample = require('./panResponderExample');
var PixelRatioExample = require('./pixelRatioExample');
var TimePickerAndroidExample = require('./timePickerAndroidExample');
var ToastAndroidExample = require('./toastAndroidExample');
var VibrationExample = require('./vibrationExample');

var toolbarActions = [
  {title: 'Create', icon: require('../images/ic_create_black_48dp.png'), show: 'always'},
  {title: 'Filter'},
  {title: 'Settings', icon: require('../images/ic_settings_black_48dp.png'), show: 'always'},
];

var DemoList = React.createClass({

  render: function() {
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollView}>
        <ToolbarAndroid
          actions={toolbarActions}
          style={styles.toolbar}
          title={'ReactNative'}/>

        <NavigatorItem navigator={this.props.navigator} title="ToolbarAndroid" component={ToolbarAndroidExample} />

        <NavigatorItem navigator={this.props.navigator} title="DrawerLayout" component={DrawerLayoutAndroidExample} />

        <NavigatorItem navigator={this.props.navigator} title="Image" component={ImageExample} />

        <NavigatorItem navigator={this.props.navigator} title="ListView" component={ListViewExample} />

        <NavigatorItem navigator={this.props.navigator} title="Modal" component={ModalExample} />

        <NavigatorItem navigator={this.props.navigator} title="Picker" component={PickerExample} />

        <NavigatorItem navigator={this.props.navigator} title="ProgressBar" component={ProgressBarExample} />

        <NavigatorItem navigator={this.props.navigator} title="ScrollView" component={ScrollViewExample} />

        <NavigatorItem navigator={this.props.navigator} title="SwitchView" component={SwitchExample} />

        <NavigatorItem navigator={this.props.navigator} title="TextInput" component={TextInputExample} />

        <NavigatorItem navigator={this.props.navigator} title="ViewPagerAndroid" component={ViewPagerAndroidExample} />

        <NavigatorItem navigator={this.props.navigator} title="WebView" component={WebViewExample} />

        <NavigatorItem navigator={this.props.navigator} title="StatusBar" component={StatusBarExample} />

        <NavigatorItem navigator={this.props.navigator} title="Alert" component={AlertExample} />

        <NavigatorItem navigator={this.props.navigator} title="Animated" component={AnimatedExample} />

        <NavigatorItem navigator={this.props.navigator} title="AppState" component={AppStateExample} />

        <NavigatorItem navigator={this.props.navigator} title="CameraRoll" component={CameraRollExample} />

        <NavigatorItem navigator={this.props.navigator} title="ClipBoard" component={ClipBoardExample} />

        <NavigatorItem navigator={this.props.navigator} title="DatePickerAndroid" component={DatePickerAndroidExample} />

        <NavigatorItem navigator={this.props.navigator} title="Dimensions" component={DimensionsExample} />

        <NavigatorItem navigator={this.props.navigator} title="Linking" component={LinkingExample} />

        <NavigatorItem navigator={this.props.navigator} title="NetInfo" component={NetInfoExample} />
        
        <NavigatorItem navigator={this.props.navigator} title="PanResponder" component={PanResponderExample} />

        <NavigatorItem navigator={this.props.navigator} title="PixelRatio" component={PixelRatioExample} />

        <NavigatorItem navigator={this.props.navigator} title="TimePickerAndroid" component={TimePickerAndroidExample} />

        <NavigatorItem navigator={this.props.navigator} title="ToastAndroid" component={ToastAndroidExample} />

        <NavigatorItem navigator={this.props.navigator} title="Vibration" component={VibrationExample} />

      </ScrollView>
    );
  },

  // BackAndroid
  componentWillMount: function() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  },

  componentWillUnmount: function() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  },

  onBackAndroid: function() {
    var {navigator} = this.props;
    const routers = navigator.getCurrentRoutes();
    if (routers.length > 1) {
      navigator.pop();
      return true;
    }
    return false;
  }
});

var NavigatorItem = React.createClass({
  handleNavigator: function(){
    this.props.navigator.push(
    {
      title: this.props.title,
      component: this.props.component,
      params: {
        componentName: this.props.title,
        id: 123456
      }
    });
  },

  render: function() {
    return (
      <TouchableOpacity onPress={() => this.handleNavigator()}>
        <View style={styles.listItem}><Text>{this.props.title}</Text></View>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create({
  scrollView: {flex:1,},
  contentContainerStyle:{justifyContent:'flex-start', alignItems:'flex-start'},
  listItem: {flex:1, flexDirection:'row', padding:15, borderBottomWidth:0.5,borderColor:'#ccc',backgroundColor:'#e4f0fd'},
  toolbar: {
    backgroundColor: '#E9EAED',
    height: 56,
  },
});

module.exports = DemoList;
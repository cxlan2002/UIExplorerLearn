import React, {
  View,
  Image,
  Text,
  ViewPagerAndroid,
  Component,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
  Alert,
} from 'react-native';

var PAGES = 5;
var ProgressBar = React.createClass({
  render: function() {
    var fractionalPosition = (this.props.progress.position + this.props.progress.offset);
    var progressBarSize = (fractionalPosition / (PAGES - 1)) * this.props.size;
    return (
      <View style={[styles.progressBarContainer, {width: this.props.size}]}>
        <View style={[styles.progressBar, {width: progressBarSize}]}/>
      </View>
    );
  }
});

var ViewPagerAndroidExample = React.createClass({
  getInitialState: function() {
    return {
      page: 0,
      total: 5,
      visable: 0,
      progress: {
        position: 0,
        offset: 0,
      },
    };
  },

  _pageSelected: function(e){
    this.setState({
      page: e.nativeEvent.position,
    });
  },

  _pageScroll:function(e){
    this.setState({
      visable: e.nativeEvent.offset,
      progress: e.nativeEvent
    });
  },

  goFirst: function(){
    this.viewPager.setPage(0);
    this.setState({
      page: 0
    });
  },

  goLast: function(){
    this.viewPager.setPage(PAGES-1);
    this.setState({
      page: PAGES-1
    });
  },

  go: function(delta){
    if((this.state.page==0 && delta<0) || (this.state.page==PAGES-1 && delta>0)){
      return;
    };
    var curPage = this.state.page+delta;
    this.viewPager.setPage(curPage);
    this.setState({
      page: curPage
    });
  },

  render: function() {
    return (
      <View style={{flex:1}}>
        <ViewPagerAndroid 
        style={styles.viewPager}
        initialPage={0}
        keyboardDismissMode='on-drag'
        onPageSelected={this._pageSelected}
        onPageScroll={this._pageScroll}
        ref={viewPager => { this.viewPager = viewPager; }}>
          <View style={[styles.page,styles.bg1]}>
            <Text style={styles.white}>First page</Text>
          </View>
          <View style={[styles.page,styles.bg2]}>
            <Text style={styles.white}>Second page</Text>
          </View>
          <View style={[styles.page,styles.bg3]}>
            <Text style={styles.white}>Third page</Text>
          </View>
          <View style={[styles.page,styles.bg4]}>
            <Text style={styles.white}>four page</Text>
          </View>
          <View style={[styles.page,styles.bg5]}>
            <Text style={styles.white}>five page</Text>
          </View>
        </ViewPagerAndroid>

        <View style={styles.bar}>
          <Text style={{color:'#fff'}}>{this.state.page+1}/{this.state.total}</Text>
          <ProgressBar size={100} progress={this.state.progress}/>
          <View style={{height:10,borderWidth:0.5,borderColor:'#fff',width:100}}>
            <View style={{height:10,backgroundColor:'#ff0',width:this.state.visable*100}}></View>
          </View>
        </View>

        <View style={[styles.bar,{justifyContent:'center'}]}>
          <Text style={{color:'#fff'}}>{this.state.visable}</Text>
        </View>

        <View style={styles.bar}>
          <TouchableOpacity onPress={() => this.goFirst()}>
            <View style={styles.button}><Text style={{fontSize:10}}>第一页</Text></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.go(-1)}>
            <View style={styles.button}><Text style={{fontSize:10}}>上一张</Text></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.go(1)}>
            <View style={styles.button}><Text style={{fontSize:10}}>下一张</Text></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goLast()}>
            <View style={styles.button}><Text style={{fontSize:10}}>最后页</Text></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  viewPager:{height:200},
  page:{justifyContent:'center',alignItems:'center'},
  bg1:{backgroundColor:'#f0f'},
  bg2:{backgroundColor:'#0ff'},
  bg3:{backgroundColor:'#00f'},
  bg4:{backgroundColor:'#0f0'},
  bg5:{backgroundColor:'#f08'},
  bar:{flexDirection:'row', alignItems:'center', justifyContent:'space-between', height:30,paddingLeft:10,paddingRight:10,backgroundColor:'#000'},
  white:{color:'#fff'},
  progressBarContainer: {height: 10,borderColor: '#fff',borderWidth: 0.5,},
  progressBar: {alignSelf: 'flex-start',flex: 1,backgroundColor: '#f0f',},
  button:{backgroundColor:'#ddd',width:60,height:20,alignItems:'center',justifyContent:'center'}
});

module.exports = ViewPagerAndroidExample;
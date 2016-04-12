import React, {
  View,
  Image,
  Text,
  ListView,
  RefreshControl,
  Component,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';

var ListViewExample = React.createClass({
  pageNumber : 20,
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      isRefreshing: false,
      dataSource: ds.cloneWithRows(this.listViewData()),
    };
  },

  listViewData: function(){
    var dataArray = [];
    for (var i = 1; i <= this.pageNumber; i++) {
      dataArray.push('Row'+i);
    };
    return dataArray;
  },

  _renderRow: function(rowData, sectionID, rowID){
    return (
      <View style={styles.listItem}><Text>{rowData+' ~||~ '+sectionID+' ~||~ '+rowID}</Text></View>
    )
  },

  _renderFooter: function(){
    return (
      <View style={[styles.listItem, {alignItems:'center'}]}><Text>loading...</Text></View>
    )
  },

  _onEndReached: function(){
    this.pageNumber += 20,
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.listViewData()),
    });
  },

  _onRefresh: function() {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      });
    }, 3000);
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        onEndReached={this._onEndReached}
        onEndReachedThreshold={10}
        pageSize={this.pageNumber}
        renderFooter={this._renderFooter}
        removeClippedSubviews={true}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            tintColor="#ff0000"
            title="Loading..."
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        }
       />
    );
  }
});

var styles = StyleSheet.create({
  listItem: {padding:15,borderBottomWidth:0.5,borderColor:'#ccc',overflow:'hidden'}
});

module.exports = ListViewExample;
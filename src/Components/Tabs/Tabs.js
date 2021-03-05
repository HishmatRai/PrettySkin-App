import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';
import Tab1 from './../NewAnnouncement/NewAnnouncement';
import Tab2 from './../AnnouncementHistory/AnnouncementHistory';
export default class Tabs11 extends Component {
  render() {
    return (
      <Tabs tabBarUnderlineStyle={{ backgroundColor: "white", alignSelf: "center", height: 5 }} >

        <Tab heading="New Announcement" tabStyle={{ backgroundColor: 'black', width: 50, borderBottomWidth: 5, borderBottomColor: "#8B8B8B" }} textStyle={{ color: '#8B8B8B', fontSize: 13 }} tabStyle={{ backgroundColor: 'black' }} activeTabStyle={{ backgroundColor: 'black' }} activeTextStyle={{ color: 'white', fontSize: 13 }}>
          <Tab1 path={this.props.path} />
        </Tab>
        <Tab heading="Announcements History" tabStyle={{ backgroundColor: 'black', width: 50, borderBottomWidth: 5, borderBottomColor: "#8B8B8B" }} textStyle={{ color: '#8B8B8B', fontSize: 13 }} activeTabStyle={{ backgroundColor: 'black' }} activeTextStyle={{ color: 'white', fontSize: 13 }}>
          <Tab2 path={this.props.path} />
        </Tab>
      </Tabs>
    );
  }
}

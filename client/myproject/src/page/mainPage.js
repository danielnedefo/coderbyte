import React, {useState, useEffect} from 'react';
import Card from '../common/card';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import UserPage from './users';
import DevicePage from './devices';

const MainPage = () => {
  const [showDevice, setShowDevice] = useState(true);
  const [showUsers, setshowUsers] = useState(false);
  const renderDevices = () => {
    setShowDevice(true);
    setshowUsers(false);
  };
  const renderUsers = () => {
    setshowUsers(true);
    setShowDevice(false);
  };
  return (
    <SafeAreaView>
      <View style={styles.containerBtn}>
        <TouchableOpacity
          onPress={renderDevices}
          style={{
            backgroundColor: showDevice ? '#e9e9e9' : 'white',
            marginRight: 15,
          }}>
          <Text>Devices</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={renderUsers}
          style={{backgroundColor: showUsers ? '#e9e9e9' : 'white'}}>
          <Text>Users</Text>
        </TouchableOpacity>
      </View>
      {showUsers && <UserPage />}
      {showDevice && <DevicePage />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containerBtn: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e9e9e9',
  },
});
export default MainPage;

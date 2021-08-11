import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
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
          style={[
            {
              backgroundColor: showDevice ? '#e9e9e9' : 'white',
            },
            styles.deviceBtn,
          ]}>
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
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e9e9e9',
  },
  deviceBtn: {
    marginRight: 15,
  },
});
export default MainPage;

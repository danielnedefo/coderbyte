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
} from 'react-native';

const DevicePage = () => {
  useEffect(() => {
    const req = fetch('http://localhost:4000/api/devices.json')
      .then(res => res.json())
      .then(({data}) => setDevices(data));
  }, []);
  const [devices, setDevices] = useState();
  console.log(devices);
  return (
    <SafeAreaView>
      <View style={styles.mainWrapper}>
        {devices &&
          devices.map(device => (
            <Card
              title={device.attributes.name}
              subtitleText={device.attributes.model_number}
              state={device.attributes.state}
            />
          ))}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: 15,
    width: '100%',
    height: '100%',
  },
});
export default DevicePage;

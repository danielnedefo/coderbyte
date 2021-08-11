import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../common/card';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';

const DevicePage = () => {
  useEffect(() => {
    fetchDevices();
  }, []);
  const [devices, setDevices] = useState();
  const fetchDevices = async () => {
    const {data} = await axios.get('http://localhost:4000/api/devices.json');
    setDevices(data.data);
  };
  console.log(devices);
  return (
    <SafeAreaView>
      <View style={styles.mainWrapper}>
        <FlatList
          data={devices}
          style={styles.listContainer}
          renderItem={({item}) => (
            <Card
              title={item.attributes.name}
              subtitleText={item.attributes.model_number}
              state={item.attributes.state}
            />
          )}
        />
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
  listContainer: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
export default DevicePage;

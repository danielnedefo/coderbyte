import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../common/card';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';

const UserPage = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const {data} = await axios.get('http://localhost:4000/api/users.json');
    setUsers(data.data);
  };
  return (
    <SafeAreaView>
      <View style={styles.mainWrapper}>
        <FlatList
          data={users}
          style={styles.listContainer}
          renderItem={({item}) => (
            <Card
              title={item.attributes.name}
              subtitleText={item.attributes.email}
              status={
                item.attributes.status === 'current' ? 'active' : 'not active'
              }
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
export default UserPage;

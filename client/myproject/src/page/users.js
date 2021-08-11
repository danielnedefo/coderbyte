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

const UserPage = () => {
  useEffect(() => {
    const req = fetch('http://localhost:4000/api/users.json')
      .then(res => res.json())
      .then(({data}) => setUsers(data));
  }, []);
  const [users, setUsers] = useState();
  return (
    <SafeAreaView>
      <View style={styles.mainWrapper}>
        {users &&
          users.map(user => (
            <Card
              title={user.attributes.name}
              subtitleText={user.attributes.email}
              status={
                user.attributes.status === 'current' ? 'active' : 'not active'
              }
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
export default UserPage;

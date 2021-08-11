import React from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
const Card = ({title, subtitleText, status, state}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.content}>
        <Text style={styles.titleText}>{title}</Text>
        <Text>{subtitleText}</Text>
        {status && (
          <View
            style={[
              styles.status,
              {backgroundColor: status === 'active' ? '#99ff99' : 'red'},
            ]}>
            <Text style={{textAlign: 'center'}}>{status}</Text>
          </View>
        )}
        {state && (
          <>
            <Switch
              style={styles.switchContainer}
              value={state === 'locked' ? true : false}
            />
            <Text
              style={[
                {color: state === 'locked' ? '#99ff99' : 'red'},
                styles.lockedText,
              ]}>
              {state === 'locked' ? 'Locked' : 'Unlocked'}
            </Text>
          </>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 120,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e9e9e9',
  },
  status: {
    textAlign: 'center',
    width: 70,
    height: 20,
    borderRadius: 10,
    marginLeft: 180,
    marginTop: 15,
  },
  content: {
    marginLeft: 10,
  },
  titleText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  switchContainer: {
    marginTop: 10,
  },
  lockedText: {
    position: 'absolute',
    top: 60,
    left: 180,
  },
});
export default Card;

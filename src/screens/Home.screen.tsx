import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MoodPicker } from '../components/MoodPicker';

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <MoodPicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

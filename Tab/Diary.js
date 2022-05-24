import React from 'react';
import { StyleSheet, Text, View } from "react-native";

const Diary = () => {
  return (
    <View style={styles.container}>
      <Text>Diary</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Diary;
import React from 'react';
import { StyleSheet, Text, View } from "react-native";

const Record = () => {
  return (
    <View style={styles.container}>
      <Text>Record</Text>
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

export default Record;
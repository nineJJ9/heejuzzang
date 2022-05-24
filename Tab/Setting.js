import React from 'react';
import { StyleSheet, Text, View } from "react-native";

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 20}}>Info
      </Text>
      <Text>
        버전정보: 1.0
      </Text>
      <Text>
        자료출처: 제주 오름 공공데이터
      </Text>
      <Text>
        개발자: NINE
      </Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 50
  },
});

export default Setting;
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Mypage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        width: 300,
        height: 50,
        marginBottom: 30
        }}>
        <TouchableOpacity onPress={() => navigation.navigate("Stamp")}>
        <Text style={{fontSize: 20}}>오름 스탬프</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        width: 300,
        height: 50,
        marginBottom: 30
        }}>
        <TouchableOpacity onPress={() => navigation.navigate("Button")}>
        <Text style={{fontSize: 20}}>오름 뱃지</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        width: 300,
        height: 50,
        marginBottom: 30
        }}>
        <TouchableOpacity onPress={() => navigation.navigate("Bookmark")}>  
        <Text style={{fontSize: 20}}>북마크 목록</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -270
  },
});

export default Mypage;
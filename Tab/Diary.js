import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Diary = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{
        position: 'fixed',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        width: 300,
        height: 50,
        marginTop:250,
        marginBottom: 30
        }}>
        <Text style={{fontSize: 20}}>3월 1일 거문오름</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Record")}>
          <Ionicons name="pencil" size={25} color="black" />
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
        <Text style={{fontSize: 20}}>3월 1일 거문오름</Text>
        <Ionicons name="pencil" size={25} color="black" />
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
        <Text style={{fontSize: 20}}>3월 1일 거문오름</Text>
        <Ionicons name="pencil" size={25} color="black" />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Record")}>      
        <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        width: 90,
        height: 50,
        marginTop:200
        }}>
        <Text style={{fontSize: 20}}>글쓰기</Text>
      </View>
      </TouchableOpacity>
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

export default Diary;
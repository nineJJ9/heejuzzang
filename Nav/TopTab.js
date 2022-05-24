import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Diary from "../Tab/Diary";
import Home from "../Tab/Home";
import List from "../Tab/List";
import Mypage from "../Tab/Mypage";
import Setting from "../Tab/Setting";
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const TopTab = ({route}) => {
    return (
        <Tab.Navigator
            initialRouteName={"홈"}
            tabBarPosition = "bottom"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarShowIcon: true,
                tabBarScrollEnabled: false,
                //swipeEnabled: false,
                tabBarIndicatorStyle: {
                    backgroundColor: "white"
                }
            }}
            >
            <Tab.Screen
                name = "오름목록"
                component={List}
                options={{
                    tabBarIcon: ({focused}) => 
                        focused ? (
                        <Ionicons name="list-circle" size={24} color="#336633" />) : (
                        <Ionicons name="list-circle-outline" size={24} color="#666666" />)
                }}
            />
            <Tab.Screen
                name = "오름일지"
                component={Diary}
                options={{
                    tabBarIcon: ({focused}) => 
                        focused ? (
                        <Ionicons name="book" size={24} color="#336633" />) : (
                        <Ionicons name="book-outline" size={24} color="#666666" />)
                }}
            />
            <Tab.Screen
                name = "홈"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => 
                        focused ? (
                        <Ionicons name="home" size={24} color="#336633" />) : (
                        <Ionicons name="home-outline" size={24} color="#666666" />)
                }}
            />
            <Tab.Screen
                name = "마이페이지"
                component={Mypage}
                options={{
                    tabBarIcon: ({focused}) => 
                        focused ? (
                        <Ionicons name="person-circle" size={24} color="#336633" /> ) : (
                        <Ionicons name="person-circle-outline" size={24} color="#666666" />)
                }}
            />
            <Tab.Screen
                name = "환경설정"
                component={Setting}
                options={{
                    tabBarIcon: ({focused}) => 
                        focused ? (
                        <Ionicons name="settings" size={24} color="#336633" />) : (
                        <Ionicons name="settings-outline" size={24} color="#666666" />)
                }}
            />
        </Tab.Navigator>
    )
}

export default TopTab;
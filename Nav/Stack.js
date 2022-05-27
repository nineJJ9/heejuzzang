import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopTab from "../Nav/TopTab";
import Record from "../Tab/Record";
import Stamp from "../Tab/Stamp";
import Bookmark from "../Tab/Bookmark";
import Button from "../Tab/Button";

const ns = createNativeStackNavigator();

const Stack = () => {
    return(
        <ns.Navigator>
            <ns.Screen
                name = "TopTab"
                component={TopTab}
                options={{headerShown: false}}    
            ></ns.Screen>
            <ns.Screen
                name = "Record"
                component={Record}  
                options={{headerTitleStyle: {color: "#fff"}}}  
            ></ns.Screen>
        </ns.Navigator>
    )
}

export default Stack;
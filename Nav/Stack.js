import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopTab from "./TopTab";
import TagSearch from "../Tab/TagSearch";

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
                name = "TagSearch"
                component={TagSearch}  
                options={{headerTitleStyle: {color: "white"}}}  
            ></ns.Screen>
        </ns.Navigator>
    )
}

export default Stack;
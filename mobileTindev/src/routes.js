import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './pages/Login';
import Main from './pages/Main';

const Drawer = createDrawerNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Login" component={Login}/>
                <Drawer.Screen name="Main" component={Main}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
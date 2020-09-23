import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const ControlBar = (props) => {
    return (
        <View>
            <Button title={(props.paused) ? 'Resume' : 'Pause'} onPress={props.onPause}/>
            <Button title={'Reset'} onPress={props.onReset}/>
        </View>
    );
};

export default ControlBar;

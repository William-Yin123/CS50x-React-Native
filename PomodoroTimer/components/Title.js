import React from 'react';
import {Text} from 'react-native';

const Title = (props) => (
    <Text>{props.isWorking ? "Work" : "Break"} Timer</Text>
);

export default Title;

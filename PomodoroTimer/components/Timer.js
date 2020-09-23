import React from 'react';
import {Text} from 'react-native';

const Timer = (props) => {
    const minutes = Math.floor(props.time / 60);
    const seconds = props.time % 60;
    const minuteString = (minutes < 10) ? `0${minutes}` : `${minutes}`;
    const secondString = (seconds < 10) ? `0${seconds}` : `${seconds}`;

    return (
        <Text>{minuteString}:{secondString}</Text>
    );
};

export default Timer;

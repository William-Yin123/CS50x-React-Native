import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const Input = (props) => {
    return (
        <View>
            <Text>{props.title} Time:</Text>
            <Text>Mins:</Text>
            <TextInput
                style={styles.bordered}
                value={props.mins}
                onChangeText={text => props.onChangeText(props.timer, "mins", text)}
                keyboardType={'numeric'}
            />
            <Text>Secs:</Text>
            <TextInput
                style={styles.bordered}
                value={props.secs}
                onChangeText={text => props.onChangeText(props.timer, "secs", text)}
                keyboardType={'numeric'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    bordered: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1
    }
});

export default Input;

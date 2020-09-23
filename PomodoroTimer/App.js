import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/Title';
import Timer from './components/Timer';
import ControlBar from './components/ControlBar';
import Input from './components/Input';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            paused: false,
            isWorking: true,
            workTime: 0.25 * 60,
            breakTime: 0.25 * 60
        };

        this.state.currentTime = this.state.workTime;
    }

    componentDidMount(): void {

        this.timerId = setInterval(() => {
            if (this.state.paused) return;

            this.setState(previousState => {
                let currentTime = previousState.currentTime;
                let isWorking = previousState.isWorking;
                if (previousState.currentTime === 0) {
                    if (previousState.isWorking) {
                        currentTime = previousState.breakTime;
                    } else {
                        currentTime = previousState.workTime;
                    }
                    isWorking = !isWorking;
                }

                return {currentTime: currentTime - 1, isWorking: isWorking}
            });
        }, 1000);
    }

    componentWillUnmount(): void {
        clearInterval(this.timerId);
    }

    onPause() {
        this.setState({paused: !this.state.paused});
    }

    onReset() {
        if (this.state.isWorking) this.setState({currentTime: this.state.workTime});
        else this.setState({currentTime: this.state.breakTime});
    }

    onChangeText(timer, field, text) {
        if (!+text) return;

        this.setState(previousState => {
            let timeToAdd = +text;
            let newTime;
            if (field === "mins") {
                timeToAdd *= 60;
                newTime = (previousState[timer] % 60) + timeToAdd;
            } else {
                newTime = Math.floor(previousState[timer] / 60) + timeToAdd;
            }
            return {[timer]: newTime, currentTime: newTime};
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Title isWorking={this.state.isWorking}/>
                <Timer time={this.state.currentTime} />
                <ControlBar onPause={() => this.onPause()} paused={this.state.paused} onReset={() => this.onReset()}/>
                <Input
                    title={"Work"}
                    mins={`${Math.floor(this.state.workTime / 60)}`}
                    secs={`${this.state.workTime % 60}`}
                    timer={"workTime"}
                    onChangeText={(timer, field, text) => this.onChangeText(timer, field, text)}
                />
                <Input
                    title={"Break"}
                    mins={`${Math.floor(this.state.breakTime / 60)}`}
                    secs={`${this.state.breakTime % 60}`}
                    timer={"breakTime"}
                    onChangeText={(timer, field, text) => this.onChangeText(timer, field, text)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
//import { height } from '../../config/globalStyles';

const AppHeader = ({
    lefttitle,
    lefttitlePress,
    noIcon,
    rightIcon,
    rightIconPress,
    rightIcon2,
    rightIconPress2,
    rightIcon3,
    rightIconPress3,
    leftIcon,
    leftIconPress,
}) => {

    return (
        <View style={styles.container}>
            {leftIcon &&
                <TouchableOpacity
                    style={styles.leftIcon}
                    onPress={leftIconPress}
                >
                    {leftIcon}
                </TouchableOpacity>

            }
            <View style={[styles.titleContainer, noIcon ? {} : { alignSelf: 'flex-start' }]}>
                <TouchableOpacity
                    onPress={lefttitlePress}
                    disabled={lefttitlePress ? false : true}
                >
                    <Text style={{ textAlign: 'center', fontSize:22, fontWeight:'bold'}}> {lefttitle} </Text>
                </TouchableOpacity>
            </View>
            {rightIcon &&
                <TouchableOpacity
                    style={styles.rightIcon}
                    onPress={rightIconPress}
                >
                    {rightIcon}
                </TouchableOpacity>
            }
            {rightIcon2 &&
                <TouchableOpacity
                    style={styles.rightIcon2}
                    onPress={rightIconPress2}
                >
                    {rightIcon2}
                </TouchableOpacity>
            }
            {rightIcon3 &&
                <TouchableOpacity
                    style={styles.rightIcon3}
                    onPress={rightIconPress3}
                >
                    {rightIcon3}
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: 50,
        paddingLeft:8,
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey'
    },
    titleContainer: {
        height: '100%',
        justifyContent: 'center',
    },
    leftIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    rightIcon: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    rightIcon2: {
        position: 'absolute',
        bottom: 10,
        right: 40,
    },
    rightIcon3: {
        position: 'absolute',
        bottom: 10,
        right: 70,
    }

})

export default AppHeader;
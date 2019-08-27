import React, { useState} from 'react'
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText)
      }

    const addGoalHandler = () => {
        props.addGoal(enteredGoal)
        setEnteredGoal('')
    }

    return (
        <Modal animationType="slide" visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput  
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                         <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.btn}>
                         <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
             </View>
        </Modal> 
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      },
      input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
      },
      btnContainer: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '60%'
      },
      btn: {
          width: '40%'
      }
})

export default GoalInput
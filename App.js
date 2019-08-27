import React, {useState} from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentGoals => [...currentGoals,
      {id: Math.random().toString(), value: enteredGoal}
    ])

    setIsModalVisible(false)
  }

  const cancelGoalHandler = () => {
    setIsModalVisible(false)
  }

  const deleteGoal = goalId => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter(goal => goal.id !== goalId)
    })
  }
 return (
   <View style={styles.screen}>
       <Button title="Add new goal" onPress={() => setIsModalVisible(true)} />
     <GoalInput addGoal={addGoalHandler} visible={isModalVisible} onCancel={cancelGoalHandler} />
     <ScrollView>
        {courseGoals.map(goal => {
          return (
            <GoalItem key={goal.id} id={goal.id} goal={goal.value} onClickDelete={deleteGoal} />
          )
        })}
     </ScrollView>
   </View>
 );
}


const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})

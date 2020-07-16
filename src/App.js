import React, { useState } from 'react'
import dayjs from 'dayjs'

import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import TaskPageDetails from './/pages/TaskPageDetails'
import NotFound from './pages/NotFound'
import { Route, Switch } from 'react-router-dom'
import defaultTasks from './tasks.json'

function App() {
  const driver = 'Will Smith'
  const [tasks, setTasks] = useState(defaultTasks)
  let timeStamp = dayjs().format('HH:mm')

  const setTimestamp = (status, callNumber) => {
    const updatedTasks = tasks.map((el) => {
      if (el.call_number === callNumber) {
        // we already had that in ItemList
        if (status === 'start') {
          el.start = timeStamp
          return el
        } else if (status === 'arrival') {
          el.arrival = timeStamp
          return el
        } else if (status === 'done') {
          el.done = timeStamp
          return el
        }
      } else {
        return el
      }
    })

    setTasks(updatedTasks)
  }

  return (
    <>
      <Header name={driver} />
      <Switch>
        <Route
          path="/dashboard"
          component={() => <Dashboard tasks={tasks} />}
        />
        <Route
          path="/taskpagedetails/:callNumber"
          component={(props) => (
            <TaskPageDetails
              tasks={tasks}
              handleSetTimestamp={setTimestamp}
              {...props}
            />
          )}
        />
        <Route exact path="/" component={() => <Dashboard tasks={tasks} />} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App

import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface Lessons {
  id: string,
  title: string,
}

function App() {

  const { data } = useQuery<{lessons: Lessons[]}>(GET_LESSONS_QUERY)

  console.log(data)

  return (
    <div className="App">
      <ul>
        {data?.lessons.map((d) => {
          return (
            <li key={d.id}>{d.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App

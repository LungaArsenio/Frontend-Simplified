import { useParams } from "react-router-dom"

function Users () {
    const { username } = useParams();
    return  <h1> {username} </h1>
}

export default Users









/**
 * To create a dynamic route I need to:
 * follow route name with a collon
 * To acces thr route we use useParams
 */

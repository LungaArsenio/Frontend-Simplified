import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import User from "../components/User"

function Home() {
    const [users, setUsers] = useState([])

    async function fetchUsers() {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(data)
        }

    useEffect(() => {
       setTimeout(() => {
	    fetchUsers();
        }, 500);
    }, [])


    return(
        <div>
            {users.map((user) => (
                <Link to={`/${user.id}`}>
                    <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    username={user.username}
                    />
                </Link>
        ))}
        </div>
    );
}

export default Home

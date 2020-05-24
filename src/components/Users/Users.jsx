import React from 'react'
import Header from '../Header/Header'
import Row from "react-bootstrap/Row"
import UsersList from '../UsersList'
import UserCard from './UserCard'
import './Users.css'


const Users = () => {

    return ( 
        <>
            <Header />
            <Row className = 'userRow'>
                {UsersList.map(user => (<UserCard key = {user.id} {...user} />))}
            </Row>
        </>
     );
}
 
export default Users;
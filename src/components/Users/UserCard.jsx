import React from 'react'
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './UserCard.css'


const UserCard = ({name, surname, picture, id}) => {
    return (  
        <>
            <Col md={4}>
                <Card className = 'userCards'>
                    <Link class='linkCard' to={`/userDetails/${id}`}>
                        <Card.Img src={picture}className='userPicture'></Card.Img>    
                        <Card.Title className="userName">{name} {surname}</Card.Title>
                    </Link>
                </Card>
            </Col>
        
        </>
    );
}
 
UserCard.propTypes={
    name:PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,

  }

export default UserCard;
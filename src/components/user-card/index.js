import React, { useState } from 'react';
import theme from '../../theme'

const UserCard = (props) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleShowInfo = () => {
        setShowInfo(!showInfo);
      }

    const styles = {
        cardHeader: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            overflowWrap: 'break-word',

            color: theme.PRYMARY,
            fontSize: '1.8em',
            fontWeight: '600'
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',

            minWidth: '90vw',
            maxWidth: '90vw',
            margin: '2vh 8vw',
            padding: '2vh 2vw',
            borderRadius: '30px',

            backgroundColor: theme.CARDBACKGROUND,
            overflowWrap: 'break-word',
        },
        avatar: {
            width: '20vw',
            height: '10vh',
            borderRadius: '50%',
            marginRight: '4vw',
        },
        keyField: {
            color: theme.PRYMARY,
            fontWeight: '700'
        },
    };

    return (
        <div style={styles.cardContent} key={props.user.email}>
            <button onClick={handleShowInfo}>
            <div style={styles.cardHeader}>
                <img style={styles.avatar} src={props.user.picture.thumbnail} alt={`${props.user.name.first} ${props.user.name.last}`} />
                <p style={{
                    maxWidth: '70%',
                    }}>
                    {props.user.login.username}
                </p>
            </div>
            </button>
            {showInfo && (<div>
                <p>personal info</p>
                <p>
                    <span style={styles.keyField}>Name:</span> {props.user.name.first} {props.user.name.last}<br />
                    <span style={styles.keyField}>E-mail:</span> {props.user.email}<br />
                    <span style={styles.keyField}>Age:</span> {props.user.dob.age}<br />
                    <span style={styles.keyField}>Phone:</span> {props.user.phone}<br />
                    <span style={styles.keyField}>Cell:</span> {props.user.cell}
                </p>
                <p>Location</p>
                <p>
                <span style={styles.keyField}>Address:</span> {props.user.location.street.name}, N° {props.user.location.street.number}<br />
                <span style={styles.keyField}>Location:</span> {props.user.location.city}, {props.user.location.state}, {props.user.location.country}
                </p>
            </div>
            )}
        </div>
    )
}

export default UserCard
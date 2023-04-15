import React from 'react';
import theme from '../../theme'

const UserCard = (props) => {

    const styles = {
        cardHeader: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            overflowWrap: 'break-word',

            color: theme.PRYMARY,
            fontSize: '1.4em',
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',

            minWidth: '70vw',
            maxWidth: '70vw',
            margin: '2vh 8vw',
            padding: '2vh 4vw',
            borderRadius: '30px',

            backgroundColor: theme.CARDBACKGROUND,
            overflowWrap: 'break-word',
        },
        avatar: {
            width: '20vw',
            height: '10vh',
            borderRadius: '50%',
            marginRight: '20',
        },
        keyField: {
            color: theme.PRYMARY,
            fontWeight: '700'
        },
    };

    return (
        <div style={styles.cardContent} key={props.user.email}>
            <div style={styles.cardHeader}>
                <img style={styles.avatar} src={props.user.picture.thumbnail} alt={`${props.user.name.first} ${props.user.name.last}`} />
                <p style={{
                    maxWidth: '60%',
                    }}>
                    {props.user.login.username}
                </p>
            </div>
            <div>
                <p>personal info</p>
                <p>
                    <span style={styles.keyField}>Name:</span> {props.user.name.first} {props.user.name.last}<br />
                    <span style={styles.keyField}>E-mail:</span> {props.user.email}<br />
                    <span style={styles.keyField}>Age:</span> {props.user.dob.age}<br />
                    <span style={styles.keyField}>Phone:</span> {props.user.phone}<br />
                    <span style={styles.keyField}>Cell:</span> {props.user.cell}
                </p>
            </div>
            <div>
                <p>Location</p>
                <p>
                <span style={styles.keyField}>Address:</span> {props.user.location.street.name}, N° {props.user.location.street.number}<br />
                <span style={styles.keyField}>Location:</span> {props.user.location.city}, {props.user.location.state}, {props.user.location.country}
                </p>
            </div>
        </div>
    )
}

export default UserCard
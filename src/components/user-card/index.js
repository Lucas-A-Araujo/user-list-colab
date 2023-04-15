import React from 'react';

const UserCard = (props) => {

    const styles = {
        cardHeader: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
            minWidth: '100%',
        },
        avatar: {
            width: '20vw',
            height: '10vh',
            borderRadius: '50%',
            marginRight: '20',
        },
    };

    return (
        <div style={styles.cardContent} key={props.user.email}>
            <div style={styles.cardHeader}>
                <img style={styles.avatar} src={props.user.picture.thumbnail} alt={`${props.user.name.first} ${props.user.name.last}`} />
                <p>
                    {props.user.name.first} {props.user.name.last}
                </p>
            </div>
            <div>
                <p>personal info</p>
                <p>
                    Username: {props.user.login.username}<br />
                    E-mail: {props.user.email}<br />
                    Age: {props.user.dob.age}<br />
                    Phone: {props.user.phone}<br />
                    Cell: {props.user.cell}
                </p>
            </div>
            <div>
                <p>Location</p>
                <p>
                    Address: {props.user.location.street.name}, N° {props.user.location.street.number}<br />
                    Location: {props.user.location.city}, {props.user.location.state}, {props.user.location.country}
                </p>
            </div>
        </div>
    )
}

export default UserCard
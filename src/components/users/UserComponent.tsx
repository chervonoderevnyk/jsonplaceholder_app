import React from 'react';
import { IUser } from "../../interfaces/IUser";

interface IProps {
    user: IUser;
}

const UserComponent: React.FC<IProps> = ({ user }) => {

    return (
        <div>
            <h3>{user.id}. {user.name} </h3>
            <p><strong>Username:</strong> {user.username} , <strong>  Email:</strong> {user.email}</p>
        </div>
    );
};

export { UserComponent };


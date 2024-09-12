import React from 'react';
import {IUser} from "../../interfaces/IUser";
import {UserComponent} from "./UserComponent";

interface IProps {
    users: IUser[]
}

const UsersComponent:React.FC<IProps> = ({users}) => {

    return (
        <div>
            {users.map(user => (
                <UserComponent key={user.id} user={user}/>
            ))}
        </div>
    );
};

export {UsersComponent};

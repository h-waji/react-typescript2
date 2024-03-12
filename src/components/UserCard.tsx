import { FC } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
    user: UserProfile;
};

export const UserCard: FC<Props> = (props) => {
    const { user } = props;

    const style = {
        border: "solid 2px #ddd",
        borderRadius: "16px",
        padding: "0 16px",
        margin: "16px",
    }

    return (
        <div style={style}>
            <dl>
                <dt>Name</dt>
                <dd>{user.name}</dd>
                <dt>Mail</dt>
                <dd>{user.email}</dd>
                <dt>Address</dt>
                <dd>{user.address}</dd>
            </dl>
        </div>
    );
}
type UserResource = {
    code?: number;
    message?: string;
    data?: {
        username: string;
        state: string;
        user_contact?: {
            avatar: string;
            first_name: string;
            last_name: string;
        };
    };
};

export default UserResource;

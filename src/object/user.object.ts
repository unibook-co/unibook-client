export class UserObject {
    id: number;
    name: string;
    email: string;
    profileImage: string;
    roles: string[];
    createdAt: string;
    updatedAt: string;

    constructor(data: {
        id: number;
        name: string;
        email: string;
        profileImage: string;
        roles: string[];
        createdAt: string;
        updatedAt: string;
    }) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.profileImage = data.profileImage;
        this.roles = data.roles;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}

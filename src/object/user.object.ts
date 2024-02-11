export class UserObject {
    id: number;
    uuid: string;
    name: string;
    email: string;
    profileImage: string;
    roles: string[];
    createdAt: string;
    updatedAt: string;

    constructor(data: {
        id: number;
        uuid: string;
        name: string;
        email: string;
        profileImage: string;
        roles: string[];
        createdAt: string;
        updatedAt: string;
    }) {
        this.id = data.id;
        this.uuid = data.uuid;
        this.name = data.name;
        this.email = data.email;
        this.profileImage = data.profileImage;
        this.roles = data.roles;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}

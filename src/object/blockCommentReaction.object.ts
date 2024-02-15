import { UserObject } from "./user.object";

export class BlockCommentReactionObject {
    id: number;
    user: UserObject;
    reaction: string;

    constructor(data: { id: number; user: UserObject; reaction: string }) {
        this.id = data.id;
        this.user = data.user;
        this.reaction = data.reaction;
    }
}

import { UserObject } from "./user.object";

export class BlockCommentReactionObject {
    user: UserObject;
    reaction: string;

    constructor(data: { user: UserObject; reaction: string }) {
        this.user = data.user;
        this.reaction = data.reaction;
    }
}

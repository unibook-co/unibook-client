import { ParentBlockMemoObject } from "./parentBlockMemo.object";
import { UserObject } from "./user.object";

export class ChildBlockMemoObject {
  id: number;
  bookId: number;
  sectionId: number;
  blockId: string;
  content: string;
  parent: ParentBlockMemoObject;
  user: UserObject;
  createdAt: string;
  updatedAt: string;

  constructor(data: {
    id: number;
    bookId: number;
    sectionId: number;
    blockId: string;
    content: string;
    parent: ParentBlockMemoObject;
    user: UserObject;
    createdAt: string;
    updatedAt: string;
  }) {
    this.id = data.id;
    this.bookId = data.bookId;
    this.sectionId = data.sectionId;
    this.blockId = data.blockId;
    this.content = data.content;
    this.parent = data.parent;
    this.user = data.user;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

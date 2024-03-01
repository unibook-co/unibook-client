import { ChildBlockMemoObject } from "./childBlockMemo.object";
import { UserObject } from "./user.object";

export class ParentBlockMemoObject {
  id: number;
  bookId: number;
  sectionId: number;
  blockId: string;
  content: string;
  user: UserObject;
  children: ChildBlockMemoObject[];
  createdAt: string;
  updatedAt: string;

  constructor(data: {
    id: number;
    bookId: number;
    sectionId: number;
    blockId: string;
    content: string;
    children: ChildBlockMemoObject[];
    user: UserObject;
    createdAt: string;
    updatedAt: string;
  }) {
    this.id = data.id;
    this.bookId = data.bookId;
    this.sectionId = data.sectionId;
    this.blockId = data.blockId;
    this.content = data.content;
    this.children = data.children;
    this.user = data.user;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

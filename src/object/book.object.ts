import { UserObject } from "./user.object";

export class BookObject {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number;
  coverImage: string;
  status: "draft" | "pending" | "published" | "deleted";
  authorUsers: {
    id: number;
    role: string;
    user: UserObject;
  }[];

  constructor(data: {
    id: number;
    title: string;
    author: string;
    description: string;
    price: number;
    coverImage: string;
    status: "draft" | "pending" | "published" | "deleted";
    authorUsers: {
      id: number;
      role: string;
      user: UserObject;
    }[];
  }) {
    this.id = data.id;
    this.title = data.title;
    this.author = data.author;
    this.description = data.description;
    this.price = data.price;
    this.coverImage = data.coverImage;
    this.status = data.status;
    this.authorUsers = data.authorUsers;
  }
}

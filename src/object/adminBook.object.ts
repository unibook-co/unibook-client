export class AdminBookObject {
    id: number;
    title: string;
    author: string;
    description: string;
    price: number;
    coverImage: string;
    notionDatabaseId: string;
    status: "draft" | "pending" | "published" | "deleted";
    createdAt: string;
    updatedAt: string;

    constructor(data: {
        id: number;
        title: string;
        author: string;
        description: string;
        price: number;
        coverImage: string;
        notionDatabaseId: string;
        status: "draft" | "pending" | "published" | "deleted";
        createdAt: string;
        updatedAt: string;
    }) {
        this.id = data.id;
        this.title = data.title;
        this.author = data.author;
        this.description = data.description;
        this.price = data.price;
        this.coverImage = data.coverImage;
        this.notionDatabaseId = data.notionDatabaseId;
        this.status = data.status;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}

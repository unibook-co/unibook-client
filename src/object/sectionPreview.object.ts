export class SectionPreviewObject {
    id: number;
    title: string;
    bookId: number;
    parent?: SectionPreviewObject;
    children?: SectionPreviewObject[];
    order: number;
    cachedAt: string;

    constructor(data: {
        id: number;
        title: string;
        bookId: number;
        parent?: SectionPreviewObject;
        children?: SectionPreviewObject[];
        order: number;
        cachedAt: string;
    }) {
        this.id = data.id;
        this.title = data.title;
        this.bookId = data.bookId;
        this.parent = data.parent;
        this.children = data.children;
        this.order = data.order;
        this.cachedAt = data.cachedAt;
    }
}

export class AdminSectionPreviewObject {
    id: number;
    title: string;
    bookId: number;
    notionPageId: string;
    parent?: AdminSectionPreviewObject;
    children?: AdminSectionPreviewObject[];
    order: number;
    isIntroduction: boolean;
    cachedAt: string;

    constructor(data: {
        id: number;
        title: string;
        bookId: number;
        notionPageId: string;
        parent?: AdminSectionPreviewObject;
        children?: AdminSectionPreviewObject[];
        order: number;
        isIntroduction: boolean;
        cachedAt: string;
    }) {
        this.id = data.id;
        this.title = data.title;
        this.bookId = data.bookId;
        this.notionPageId = data.notionPageId;
        this.parent = data.parent;
        this.children = data.children;
        this.order = data.order;
        this.isIntroduction = data.isIntroduction;
        this.cachedAt = data.cachedAt;
    }
}

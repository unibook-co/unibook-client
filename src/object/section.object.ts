import { SectionPreviewObject } from "./sectionPreview.object";

export class SectionObject {
    id: number;
    title: string;
    bookId: number;
    recordMap?: any;
    parent?: SectionPreviewObject;
    children?: SectionPreviewObject[];
    order: number;
    cachedAt: string;

    constructor(data: {
        id: number;
        title: string;
        bookId: number;
        notionPageId: string;
        recordMap?: any;
        parent?: SectionPreviewObject;
        children?: SectionPreviewObject[];
        order: number;
        cachedAt: string;
    }) {
        this.id = data.id;
        this.title = data.title;
        this.bookId = data.bookId;
        this.recordMap = data.recordMap;
        this.parent = data.parent;
        this.children = data.children;
        this.order = data.order;
        this.cachedAt = data.cachedAt;
    }
}

export class SectionObject {
    id: number;
    title: string;
    bookId: number;
    notionPageId: string;
    recordMap?: any;
    cachedAt: string;

    constructor(data: {
        id: number;
        title: string;
        bookId: number;
        notionPageId: string;
        recordMap?: any;
        cachedAt: string;
    }) {
        this.id = data.id;
        this.title = data.title;
        this.bookId = data.bookId;
        this.notionPageId = data.notionPageId;
        this.recordMap = data.recordMap;
        this.cachedAt = data.cachedAt;
    }
}

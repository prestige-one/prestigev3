
export interface IBlogDT {
    id: number,
    author?: string,
    date: string,
    category?: string,
    title: string,
    image: string,
    delay?: string;
    excerpt?: string;
    commentCount?: number,
    categories?: string[],
}
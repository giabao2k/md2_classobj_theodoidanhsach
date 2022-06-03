export class Book{
    title :string;
    author :string;
    alreadyread :boolean;
    constructor(title :string, author :string, alreadyread :boolean){
        this.title = title;
        this.author = author;
        this.alreadyread = alreadyread;
    }
}
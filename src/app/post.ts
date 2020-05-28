export class Post {

    title:string;
    content:string;
    abstract:string;

    constructor(title:string, content:string){
        this.title = title;
        this.content = content;
        this.abstract = content.substring(0, 100) + "...";
    }

}

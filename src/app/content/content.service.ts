export class ContentService {

  content = [
    {title: "Some title",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat!", 
    id: 1},
    {title: "Very very very very long title",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat!",
    id: 2},
    {title: "Another title",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat!",
    id: 3},
    {title: "Different title",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat!",
    id: 4}
  ]

  public getPost(id: number) {
    return this.content.find(post => post.id == id );
  }

  public getAll() {
    return this.content;
  }

  public createPost() {
    let id = this.content.length + 1;
    this.content.push({title: "", content: "", id: id});
    return id;
  }

  public savePost(content) {
    if (content.title == "" ) content.title = "Пустой заголовок";
    this.content.map(post => {if (post.id == content.id) post = content });
  }

  public deletePost(id) {
    const index = this.content.findIndex((post, index) => post.id == id);
    this.content.splice(index, 1);
  }
}

import { Post } from './Post';

export class Posts {
    public posts: Array<Post>;
    constructor() {
        this.posts = new Array<Post>();
    }
    addPost(post: Post) {
        if(post){
            this.posts.push(post);
        }
        return this.posts;
    }
}
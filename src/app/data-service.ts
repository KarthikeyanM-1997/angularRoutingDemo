import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from './post';

@Injectable()
export class DataService {
    private allPosts = new BehaviorSubject<Post[]>([]);
    
    currentAllPosts = this.allPosts.asObservable();

    constructor(){

        let tempPost = [];

        tempPost.push(new Post("Title 1", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor odio, faucibus quis tincidunt convallis, consequat vel tellus. Cras ut leo est. Curabitur quis turpis at nunc ultrices tempus vitae nec nulla. Donec bibendum nisi sit amet enim rutrum, et tristique metus ultricies. Quisque facilisis metus enim, ac posuere nulla bibendum ac. Sed malesuada pretium sodales. Aenean placerat vehicula nisi, mollis tincidunt ligula feugiat a. Nullam tempus, mauris a ultrices sollicitudin, mi justo dapibus elit, congue tincidunt eros lorem vitae velit. Cras viverra mauris in volutpat sollicitudin. Donec et ligula quis quam gravida feugiat eget vel lacus. Vestibulum facilisis euismod iaculis.`));

        tempPost.push(new Post("Title 2", `Ut sollicitudin nulla ut metus pretium accumsan. Curabitur ultricies massa in dolor bibendum, at volutpat arcu tincidunt. Sed vel mauris ut magna pharetra commodo eu nec nibh. Cras posuere convallis sodales. Nam sagittis tellus eu sodales tempus. Quisque suscipit mollis mauris, sed accumsan quam fringilla eu. Mauris ac odio ac mauris bibendum imperdiet ac sit amet nulla. Phasellus porta auctor vulputate.`));
    
        tempPost.push(new Post("Title 3", `At sollicitudin nulla ut metus pretium accumsan. Curabitur ultricies massa in dolor bibendum, at volutpat arcu tincidunt. Sed vel mauris ut magna pharetra commodo eu nec nibh. Cras posuere convallis sodales. Nam sagittis tellus eu sodales tempus. Quisque suscipit mollis mauris, sed accumsan quam fringilla eu. Mauris ac odio ac mauris bibendum imperdiet ac sit amet nulla. Phasellus porta auctor vulputate.`));
    
        tempPost.push(new Post("Title 4", `Ut sollicitudin nulla ut metus pretium accumsan. Curabitur ultricies massa in dolor bibendum, at volutpat arcu tincidunt. Sed vel mauris ut magna pharetra commodo eu nec nibh. Cras posuere convallis sodales. Nam sagittis tellus eu sodales tempus. Quisque suscipit mollis mauris, sed accumsan quam fringilla eu. Mauris ac odio ac mauris bibendum imperdiet ac sit amet nulla. Phasellus porta auctor vulputate.`));

        this.allPosts.next(tempPost);
    }

    addPost(newPost : Post){

    }
}

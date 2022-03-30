package com.eryk.forum.Post;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {
    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Post>> getAllPosts(){
        List<Post> posts = postService.findAllPosts();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @GetMapping("/post/{id}")
    public ResponseEntity<Post> getPost(@PathVariable Long id){
        Post post = postService.findPostById(id);
        return new ResponseEntity<>(post, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Post> addPost(@RequestBody Post post){
        Post newPost = postService.addPost(post);
        return new ResponseEntity<>(newPost, HttpStatus.CREATED);
    }

    @PostMapping("/update")
    public ResponseEntity<Post> updatePost(@RequestBody Post post){
        Post updatedPost = postService.addPost(post);
        return new ResponseEntity<>(updatedPost, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePost(@PathVariable Long id){
        postService.deletePost(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

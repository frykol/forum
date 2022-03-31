package com.eryk.forum.Post;

import com.eryk.forum.Comment.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class PostService {
    private final PostRepo postRepo;
    private Comment comment;

    @Autowired
    public PostService(PostRepo postRepo) {
        this.postRepo = postRepo;
    }

    public List<Post> findAllPosts(){
        return postRepo.findAll();
    }

    public Post findPostById(Long id){
        return postRepo.findPostById(id).orElseThrow(() -> new PostNotFoundException("Ten post nie istnieje"));
    }

    public Post addPost(Post post){
        return postRepo.save(post);
    }

    public Post updatePost(Post post){
        return postRepo.save(post);
    }



    @Transactional
    public void deletePost(Long id){
        postRepo.deletePostById(id);
    }
}

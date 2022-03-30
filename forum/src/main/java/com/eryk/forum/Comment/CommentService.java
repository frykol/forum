package com.eryk.forum.Comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class CommentService {
    private final CommentRepo commentRepo;

    @Autowired
    public CommentService(CommentRepo commentRepo) {
        this.commentRepo = commentRepo;
    }

    public List<Comment> findAllComments(){
        return commentRepo.findAll();
    }

    public Comment findCommentById(Long id){
        return commentRepo.findCommentById(id).orElseThrow(() -> new CommentNotFoundException("ten komentarz nie istnieje"));
    }

    public Comment addComment(Comment comment){
        return commentRepo.save(comment);
    }

    public Comment updateComment(Comment comment){
        return commentRepo.save(comment);
    }

    @Transactional
    public void deleteComment(Long id){
        commentRepo.deleteCommentById(id);
    }
}

package com.eryk.forum.Comment;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommentRepo extends JpaRepository<Comment, Long> {
    Optional<Comment> findCommentById(Long id);

    void deleteCommentById(Long id);
}

package com.eryk.forum.Post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PostRepo extends JpaRepository<Post, Long> {
    Optional<Post> findPostById(Long id);

    void deletePostById(Long id);

}

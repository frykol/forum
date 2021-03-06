package com.eryk.forum.Comment;

import com.eryk.forum.Post.Post;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Comment implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String text;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "post_id", referencedColumnName = "id")
    private Post post;

    public Comment(String text, String username){
        this.text = text;
        this.username = username;
    }

    public void addPost(Post post) {
        this.post = post;
    }
}

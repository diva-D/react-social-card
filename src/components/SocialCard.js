import React, { Component } from 'react';
import postData from '../data/Posts';

class SocialCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: postData
        };
      }

    render() {
        
        return (
            <div>
                {this.state.posts.map((post, index) => (
                    <div className="container" key={index}>
                        <div className="profile-pic">
                            <img src={post.user.profileImg} alt='profile' />
                        </div>
                        <div className="user-info">
                            {post.user.displayName} {post.user.userName} &#183; {post.post.date}
                        </div>
                        <div className="post-description">
                            {post.post.description}
                        </div>
                        <div className="hero">
                            <img src={post.post.link.heroImg} alt="hero" />
                            <h4>{post.post.link.headline}</h4>
                            <p>{post.post.link.description}</p>
                        </div>
                        <div className="buttons">
                            <div className="comments">
                                <i class="far fa-comment-alt"></i>
                            </div>
                            <div className="retweets">
                                <i class="fas fa-retweet"></i>
                            </div>
                            <div className="hearts">
                                <i class="far fa-heart"></i>
                            </div>
                            <div className="email">
                                <i class="far fa-envelope"></i>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        )
    }
}

export default SocialCard;
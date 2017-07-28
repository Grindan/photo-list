import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

class PostComponent extends Component {
    render() {
        return (
            <Card className='post-card' onClick={ this.props.cardOnClick }>
                <Image src={this.props.post.link} />
                <Card.Content>
                    <Card.Header>
                        { this.props.post.author }
                    </Card.Header>
                    <Card.Description>
                        { this.props.post.description }
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default PostComponent;
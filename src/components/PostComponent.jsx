import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

export default class PostComponent extends Component {
    render() {
        return (
            <Card className='post-card'>
                <Image src={this.props.post.link} />
                <Card.Content>
                    <Card.Header>
                        { this.props.post.author }
                    </Card.Header>
                    <Card.Description>
                        { this.props.post.description }
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='calendar' /> { this.props.post.date.substring(0, 10) }
                    <Icon name='ellipsis horizontal' className='more' onClick={ this.props.showPost } />
                </Card.Content>
            </Card>
        )
    }
}

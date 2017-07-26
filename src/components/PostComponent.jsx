import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import Post from '../Post'

export default class PostComponent extends Component {
    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        // const { activeItem } = this.state
        console.log('post component render');
        // var p = new Post('lllink', 'asdasd', 'dddescription');
        // console.log(p);

        return (
            <Card className='post-card'>
                <Image src={this.props.post.link} />
                <Card.Content>
                    <Card.Header>
                        { this.props.post.author }
                    </Card.Header>
                    <Card.Description>
                        { this.props.post.description }
                        {/*Matthew is a musician living in Nashville.*/}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='calendar' />  22 Friends
                </Card.Content>
            </Card>
        )
    }
}

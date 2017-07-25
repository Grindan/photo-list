import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

import { Link } from 'react-router'


export default class App extends Component {
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu className='topMenu'>
                    <Menu.Item header>Photos</Menu.Item>
                    <Link to='/allPosts'>
                        <Menu.Item name='List' active={activeItem === 'List'} onClick={this.handleItemClick}> All posts </Menu.Item>
                    </Link>
                    <Link to='/newPost'>
                        <Menu.Item name='Add New' active={activeItem === 'Add New'} onClick={this.handleItemClick}> New post </Menu.Item>
                    </Link>
                </Menu>

                {this.props.children}
            </div>
        )
    }
}
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class MenuComponent extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu className='topMenu'>
                <Menu.Item header>Photos</Menu.Item>
                <Link to='/allPosts'>
                    <Menu.Item name='List' active={activeItem === 'List'} onClick={this.handleItemClick}> All posts </Menu.Item>
                </Link>
                <Link to='/genre'>
                    <Menu.Item name='Add New' active={activeItem === 'Add New'} onClick={this.handleItemClick}> New post </Menu.Item>
                </Link>
            </Menu>
        )
    }
}

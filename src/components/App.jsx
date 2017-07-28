import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router'

import GalleryComponent from './GalleryComponent'

export default class App extends Component {
    state = { activeItem: 'Gallery' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const activeItem = this.state.activeItem;

        return (
            <div>
                <Menu className='topMenu'>
                    <Menu.Item header>Photos</Menu.Item>
                    <Link to='/allPosts'>
                        <Menu.Item name='Gallery' active={activeItem === 'Gallery'} onClick={this.handleItemClick}> Gallery </Menu.Item>
                    </Link>
                </Menu>
                <GalleryComponent />
            </div>
        )
    }
}
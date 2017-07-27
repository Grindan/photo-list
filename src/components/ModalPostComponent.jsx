import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class ModalPostComponent extends Component {
    state = { open: this.props.isShown }

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: !this.open })

    render() {

        if (!this.props.isShown || !!this.state.post) { return null; }

        return (
            <div>
                <Modal open={ this.props.isShown } onClose={ this.close }>
                <Modal.Header>Photo post</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src={ this.props.post.link } />
                    <Modal.Description>
                        <Header>{ this.props.post.author }</Header>
                        <p>{ this.props.post.description }</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={ this.props.close }> Back </Button>
                </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default ModalPostComponent
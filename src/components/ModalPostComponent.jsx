import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class ModalPostComponent extends Component {
    state = { open: this.props.isShown, link: this.props.link }

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, dimmer } = this.state

        return (
            <div>
                {console.log('state isShown: ' + this.state.open)}
                {console.log('state photoLink: ' + this.state.link)}
                <Button onClick={this.show(true)}>Default</Button>

                <Modal dimmer={ dimmer } open={ open } onClose={ this.close }>
                <Modal.Header>Photo post</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
                    <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={ this.close }> Back </Button>
                </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default ModalPostComponent
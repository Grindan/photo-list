import React, { Component } from 'react'
import { Popup, Button, Image, Modal, Form, Header, Icon } from 'semantic-ui-react'
import Post from '../Post'

export default class ModalNewPostComponent extends Component {
    state = {
        openMain: false,
        openError: false,
        inputNickname: '',
        inputLink: '',
        inputDescription: '',
    }

    show = (dimmer) => () => this.setState({ dimmer, openMain: true })
    cancel = () => this.setState({ openMain: false, inputNickname: '', inputLink: '', inputDescription: '' })
    post = () => {
        // if (!this.state.inputLink) {  }
        console.log(new Post)
        this.setState({ openMain: false, inputNickname: '', inputLink: '', inputDescription: '' })
    }

    errorOpen = () => this.setState({ openError: true })
    errorClose = () => this.setState({ openError: false, inputLink: '' })

    render() {
        const { openMain, dimmer } = this.state

        return (
            <div>
                <Popup
                    trigger={<Button icon='plus' color='teal' className='modal-btns' onClick={ this.show(true) }></Button>}
                    content='Add new post'
                    position='bottom right'
                />

                <Modal className='fadeInDownBig animated' dimmer={dimmer} open={openMain} onClose={ this.cancel }>
                    <Modal.Header>New post</Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                            <Form>
                                <Form.Input label='Your nickname' placeholder='Your nickname' value={ this.state.inputNickname } />
                                <Form.Input label='Link to photo' placeholder='Link to photo' value={ this.state.inputLink } />
                                <Form.TextArea label='About' placeholder='Tell us more about this photo...' value={ this.state.inputDescription } />
                            </Form>
                        </Modal.Description>
                        <Image wrapped size='medium' src='https://react.semantic-ui.com/assets/images/avatar/large/rachel.png' />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.errorOpen}> Cancel </Button>
                        <Button color='teal' icon='checkmark' labelPosition='right' content="Post it" onClick={ this.post } />
                    </Modal.Actions>
                </Modal>

                <Modal
                    open={this.state.openError}
                    onClose={this.errorClose}
                    basic size='small'
                >
                    <Header icon='lightning' content='Something wrong' />
                    <Modal.Content>
                        <h3>Your link is broken :(</h3>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.errorClose} inverted>
                            <Icon name='write' /> Undestand
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}
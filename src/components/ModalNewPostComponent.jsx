import React, { Component } from 'react'
import { Popup, Button, Image, Modal, Form, Header, Icon } from 'semantic-ui-react'
import Post from '../Post'
import { addPostToLS } from '../services/savingService'

export default class ModalNewPostComponent extends Component {
    state = {
        openMain: false,
        openError: false,
        inputNickname: '',
        inputLink: '',
        inputDescription: '',
    }

    inputNicknameChange = (event) => this.setState({ inputNickname: event.target.value });
    inputLinkChange = (event) => this.setState({ inputLink: event.target.value });
    inputDescriptionChange = (event) => this.setState({ inputDescription: event.target.value });

    show = (dimmer) => () => this.setState({ dimmer, openMain: true })
    cancel = () => this.setState({ openMain: false, inputNickname: '', inputLink: '', inputDescription: '' })
    post = () => {
        if (!this.state.inputLink) { this.errorOpen() }
        else {
            var newPost = new Post(this.state.inputLink, this.state.inputNickname, this.inputDescription);
            addPostToLS(newPost);
            this.cancel();
        }
    }

    errorOpen = () => this.setState({ openError: true })
    errorClose = () => this.setState({ openError: false, inputLink: '' })

    render() {
        const { openMain, dimmer } = this.state;

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
                                <Form.Input
                                    label='Your nickname'
                                    placeholder='Your nickname'
                                    value={ this.state.inputNickname }
                                    onChange={ this.inputNicknameChange }
                                />
                                <Form.Input
                                    label='Link to photo'
                                    placeholder='Link to photo'
                                    value={ this.state.inputLink }
                                    onChange={ this.inputLinkChange }
                                />
                                <Form.TextArea
                                    label='About'
                                    placeholder='Tell us more about this photo...'
                                    value={ this.state.inputDescription }
                                    onChange={ this.inputDescriptionChange }
                                />
                            </Form>
                        </Modal.Description>
                        <Image wrapped size='medium' src='https://react.semantic-ui.com/assets/images/avatar/large/rachel.png' />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.cancel}> Cancel </Button>
                        <Button color='teal'
                            icon='checkmark'
                            labelPosition='right'
                            content="Post it"
                            onClick={ this.post }
                        />
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
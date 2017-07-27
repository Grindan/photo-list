import React, { Component } from 'react'
import { Form, Icon } from 'semantic-ui-react'

export default class NewPostComponent extends Component {

    render() {
        console.log('new post render');

        return (
            <div className='page-content'>
                <h1>New post</h1>
                <Icon name='warning' color='red' size='huge' />
                <p >I created this page on the first day and thought that it will be needed for creating new post.
                    But then I added modal component for for this purpose.
                    And I left it because of routes.</p>
                <Form>
                    <Form.Input label='Your nickname' placeholder='Your nickname' />
                    <Form.Input label='Link to photo' placeholder='Link to photo' />
                    <Form.TextArea label='Description' placeholder='Tell us more about this photo...' />
                    <Form.Group>
                        <Form.Button>Submit</Form.Button>
                        <Form.Button>Preview</Form.Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

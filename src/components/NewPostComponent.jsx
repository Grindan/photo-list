import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
// import Post from '../Post'

export default class NewPostComponent extends Component {
    // state = {}

    // handleChange = (e, { value }) => this.setState({ value })

    render() {
        // const { activeItem } = this.state
        console.log('new post render');

        // const { value } = this.state;

        return (
            <div className='page-content'>
                <h2>New post</h2>
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

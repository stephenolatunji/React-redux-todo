import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Actions';
import { Form, Button, Container } from 'semantic-ui-react';

const AddTodo = ({dispatch}) => {
    let input;
    return(
        <Container>
            <Form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value));
                    input.value = '';
                }
                }
                style={{ display: 'inline' }}>
                <Form.Input ref={node => { input = node }} />
                <Button inverted color='purple' type='submit'>Add Todo</Button>
            </Form>
        </Container>
    );
}
export default connect()(AddTodo);
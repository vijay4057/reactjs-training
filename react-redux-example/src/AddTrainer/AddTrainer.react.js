import React from 'react';
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form';


const AddTrainer = (props) => {
    const { handleSubmit } = props
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">ID</label>
                    <Field component='input' name='id' type='text'></Field>
                </div>
                <div>
                    <label htmlFor="">Name</label>
                    <Field component='input' name='name' type='text'></Field>
                </div>
                <div>
                    <label htmlFor="">Skillset</label>
                    <Field component='input' name='skillset' type='text'></Field>
                </div>
                <div>
                    <label htmlFor="">Rating</label>
                    <Field component='input' name='rating' type='text'></Field>
                </div>
                <div>
                    <input type="submit" />
                </div>


            </form>
        </div>
    );

}

export default reduxForm({ reduxForm: 'addTrainer' })(AddTrainer);
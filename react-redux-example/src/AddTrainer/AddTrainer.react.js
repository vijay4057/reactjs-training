import React from 'react';
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form';
import validate from '../validate'
const renderField = (props) => {
    const { input, type, label, meta: { touched, error, warning } } = (props)
    return (
        < div >
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />

                {touched && ((error &&
                    <span className="text-danger">{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div >
    )
}


const AddTrainer = (props) => {

    const { handleSubmit } = props
    return (
        <div >
            <form onSubmit={handleSubmit}>

                <div>
                    {/* <label htmlFor="">Id</label> */}
                    <Field component={renderField} name='id' type='text' label="Id"></Field>
                </div>
                <div>
                    {/* <label htmlFor="">Trainer Name</label>
                    <Field component='input' name='trainerName' type='text'></Field> */}
                    <Field name="trainerName" component={renderField} label="Trainer Name" />
                </div>
                <div>
                    {/* <label htmlFor="">Skill Set</label> */}
                    <Field component={renderField} name='skilSet' type='text' label="Rating"></Field>
                </div>
                <div>
                    {/* <label htmlFor="">Rating</label> */}
                    <Field component={renderField} name='rating' type='text' label="Rating"></Field>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        </div>
    );

}

export default reduxForm({ form: 'addTrainer', validate: validate })(AddTrainer);
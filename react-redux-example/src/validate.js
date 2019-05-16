

const validate = (values) => {
    const errors = {}

    if (!values.trainerName) {
        errors.trainerName = 'Required';
    } else if (values.trainerName.length < 2) {
        errors.trainerName = 'Minimum 2 characters';
    }

    return errors;
}

export default validate;
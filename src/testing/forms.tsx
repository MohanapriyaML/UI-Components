import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from '../ui-components/forms/input';
import FormPassword from '../ui-components/forms/input-password';
import FormPhoneNumberInput from '../ui-components/forms/input-phone-number';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../ui-components/forms/regex';

const defaultValue = {
    email: '',
    password: '',
    phoneNumber: ''
};

const Forms = () => {
    const {
        control,
        handleSubmit,
        formState: { dirtyFields, errors }
    } = useForm({
        defaultValues: defaultValue,
        mode: 'onChange',
        shouldFocusError: true
    });

    const onSubmit = (data: any) => {
        console.log("Form Data: ", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Forms</h1>
            <div>
                <label htmlFor='email'>Email</label>
                <FormInput
                    name="email"
                    control={control}
                    rules={{
                        pattern: {
                            value: EMAIL_REGEX,
                            message: 'Please enter the valid Email ID'
                        },
                        required: {
                            value: true,
                            message: 'Kindly enter the Email'
                        }
                    }}
                    showCheckIcon={!errors.email && dirtyFields.email}
                    errorText={errors?.email?.message}
                />
            </div>
            <div>
                <label>Password</label>
                <FormPassword
                    name="password"
                    control={control}
                    rules={{
                        pattern: {
                            value: PASSWORD_REGEX,
                            message: 'Please enter the valid Password'
                        },
                        required: {
                            value: true,
                            message: 'Kindly enter the Password'
                        }
                    }}
                    errorText={errors?.password?.message}
                />
            </div>
            <div>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <FormPhoneNumberInput
                    name="phoneNumber"
                    control={control}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Forms;

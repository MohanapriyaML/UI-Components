import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './input';
import FormPassword from './input-password';
import FormPhoneNumberInput from './input-phone-number';
import { EMAIL_REGEX, PASSWORD_REGEX } from './regex';
import { StoryFn } from '@storybook/react';

const CombinedForm = (args: any) => {
  const {
    control,
    handleSubmit,
    formState: { dirtyFields, errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      phoneNumber: '',
    },
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
        <label>Email</label>
        <FormInput
          name="email"
          control={control}
          rules={{
            pattern: {
              value: EMAIL_REGEX,
              message: 'Please enter a valid Email ID',
            },
            required: {
              value: true,
              message: 'Kindly enter the Email',
            },
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
              message: 'Please enter a valid Password',
            },
            required: {
              value: true,
              message: 'Kindly enter the Password',
            },
          }}
          errorText={errors?.password?.message}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <FormPhoneNumberInput
          name="phoneNumber"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Kindly enter the Phone Number',
            },
          }}
          errorText={errors?.phoneNumber?.message}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default {
  title: 'Form/CombinedForm',
  component: CombinedForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: StoryFn = (args) => <CombinedForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  args: {
    email: '',      
    password: '',
    phoneNumber: '',
  },
};
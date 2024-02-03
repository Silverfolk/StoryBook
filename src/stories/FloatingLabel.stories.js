import FloatingLabel from "../Components/FloatingLabel"
export default {
    title:"Components/FloatingLabel",
    component: FloatingLabel
}

const Template = (args) => <FloatingLabel {...args} />

export const Email= Template.bind({});
Email.args={
    label:"Email",
    placeholder:"Email",
    type:"email",
    id:"floatingInput"
}

export const Password= Template.bind({});
Password.args={
    label:"Password",
    placeholder:"Password",
    type:"password",
    id:"floatingPassword"
}

export const Disabled= Template.bind({});
Disabled.args={
  label:"Email",
  placeholder:"Regular",
  type:"email",
  id:"floatingInputDisabled",
  disabled:true
}

export const Invalid= Template.bind({});

Invalid.args={
  label:"Email",
  placeholder:"Regular",
  type:"email",
  id:"floatingInputInvalid",
  valid:true,
  isvalid:false
}

export const Valid= Template.bind({});

Valid.args={
    label:"Email",
    placeholder:"Regular",
    type:"email",
    id:"floatingInputInvalid",
    valid:true,
  isvalid:true
}
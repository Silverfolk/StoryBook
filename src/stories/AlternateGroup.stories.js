import { Left } from "react-bootstrap/lib/Media";
import AlternateGroup from "../Components/AlternateGroup"

export default {
    title:'Components/AlternateGroup',
    component:AlternateGroup
}

const Template= (args) => <AlternateGroup {...args} />

export const EnterText= Template.bind({});
EnterText.args={
    label:"Email",
    placeholder:"Enter Text",
    type:"email",
    id:"floatingInput"
}

export const Invalid= Template.bind({});

Invalid.args={
  label:"Email",
  placeholder:"Enter Text",
  type:"email",
  id:"floatingInputInvalid",
  valid:true,
  isvalid:false
}

export const Valid= Template.bind({});

Valid.args={
    label:"Email",
    placeholder:"Enter Text",
    type:"email",
    id:"floatingInputInvalid",
    valid:true,
  isvalid:true
}

export const LeftAdd= Template.bind({});
LeftAdd.args={
label: "Username",
placeholder:"Addon",
type:"text",
id:"basic-addon1",
addon:true,
left:true

}

export const RightAdd= Template.bind({});
RightAdd.args={
label: "Username",
placeholder:"Addon",
type:"text",
id:"basic-addon1",
addon:true,
left:false

}
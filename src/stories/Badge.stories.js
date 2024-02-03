import Badge from "../Components/Badge";

export default{
    title:"Components/Badge",
    component:Badge
}

const Template = args => <Badge {...args} />

export const Primary = Template.bind({});
Primary.args={
    backgroundColor:"#3A57E8",
    fsize:40,
    label:"Example Heading"
}
export const Secondary = Template.bind({});
Secondary.args={
    backgroundColor:"#6C757D",
    fsize:33,
    label:"Example Heading"
}
export const Success = Template.bind({});
Success.args={
    backgroundColor:"#1AA053",
    fsize:28,
    label:"Example Heading"
}
export const Danger = Template.bind({});
Danger.args={
    backgroundColor:"#C03221",
    fsize:23,
    label:"Example Heading"
}
export const Warning = Template.bind({});
Warning.args={
    backgroundColor:"#F16A1B",
    fsize:19,
    label:"Example Heading"
}
export const Info = Template.bind({});
Info.args={
    backgroundColor:"#079AA2",
    fsize:16,
    label:"Example Heading"
}
import Calender from "../Components/Calender"
export default{
    title:'Components/Calender',
    component:Calender
}

const Template = (args) => <Calender {...args} />

export const Default = Template.bind({})

Default.args = {

}
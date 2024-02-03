import Button from "../Components/Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  backgroundColor: "#3A57E8",
  label: "Primary",
  size: "md",
  padding:"24px"
}

export const Secondary = Template.bind({})
Secondary.args = {
  backgroundColor: "#6C757D",
  label: "Secondary",
  size: "md",
}

export const Success  = Template.bind({})
Success.args = {
  backgroundColor: "#1AA053",
  label: "Success",
  size: "md",
}

export const Danger = Template.bind({})
Danger.args = {
  backgroundColor: "#C03221",
  label: "Danger",
  size: "md",
}

export const Warning = Template.bind({})
Warning.args = {
  backgroundColor: "#F16A1B",
  label: "Warning",
  size: "md",
}

// Light Buttons 
export const PrimaryLight = Template.bind({})
PrimaryLight.args = {
  backgroundColor: "white",
  label: "Primary",
  size: "md",
  padding:"24px",
  color:"#3A57E8",
  borderColor:"#3A57E8"
}

export const SecondaryLight = Template.bind({})
SecondaryLight.args = {
  backgroundColor: "white",
  label: "Secondary",
  size: "md",
  color:"#6C757D",
  borderColor:"#6C757D"
}

export const SuccessLight  = Template.bind({})
SuccessLight.args = {
  backgroundColor: "white",
  label: "Success",
  size: "md",
  color:"#1AA053",
  borderColor:"#1AA053"
}

export const DangerLight = Template.bind({})
DangerLight.args = {
  backgroundColor: "white",
  label: "Danger",
  size: "md",
  color:"#C03221",
  borderColor:"#C03221"
}

export const WarningLight = Template.bind({})
WarningLight.args = {
  backgroundColor: "white",
  label: "Warning",
  size: "md",
  color:"#F16A1B",
  borderColor:"#F16A1B"
}

export const Info = Template.bind({})
Info.args = {
  backgroundColor: "#079AA2",
  label: "Info",
  size: "md",
}

export const Light = Template.bind({})
Light.args = {
  backgroundColor: "#DEE2E6",
  label: "Light",
  size: "md",
  color:"#000000"
}

export const Dark = Template.bind({})
Dark.args = {
  backgroundColor: "#212529",
  label: "Dark",
  size: "md",
}

export const InfoLight = Template.bind({})
InfoLight.args = {
  backgroundColor: "white",
  label: "Info",
  size: "md",
  color:"#079AA2",
  borderColor:"#079AA2"
}

export const LightLight = Template.bind({})
LightLight.args = {
  backgroundColor: "white",
  label: "Light",
  size: "md",
  color:"#DEE2E6",
  borderColor:"#DEE2E6"
}

export const DarkLight = Template.bind({})
DarkLight.args = {
  backgroundColor: "white",
  label: "Dark",
  size: "md",
  color:"#212529",
  borderColor:"#212529"
}
export const Link = Template.bind({})
Link.args = {
  backgroundColor: "#FFFFFF",
  label: "Link",
  size: "md",
  color:"#3A57E8",
  borderColor:"#3A57E8"
}

// ColorFull 
export const PrimaryLightColor = Template.bind({})
PrimaryLightColor.args = {
  backgroundColor: "#3A57E833",
  label: "Primary",
  size: "md",
  padding:"24px",
  color:"#2D42B2",
  
}

export const SecondaryLightColor = Template.bind({})
SecondaryLightColor.args = {
  backgroundColor: "#6C757D33",
  label: "Secondary",
  size: "md",
  color:"#6C757D"
}

export const SuccessLightColor  = Template.bind({})
SuccessLightColor.args = {
  backgroundColor: "#1AA05333",
  label: "Success",
  size: "md",
  color:"#147A3F",
 
}

export const DangerLightColor = Template.bind({})
DangerLightColor.args = {
  backgroundColor: "#C0322133",
  label: "Danger",
  size: "md",
  color:"#95271A",
  
}

export const WarningLightColor = Template.bind({})
WarningLightColor.args = {
  backgroundColor: "#F16A1B33",
  label: "Warning",
  size: "md",
  color:"#BB5215",
 
}

export const InfoColor = Template.bind({})
InfoColor.args = {
  backgroundColor: "#079AA233",
  label: "Info",
  size: "md",
  color:"#057980"
}

export const LightColor = Template.bind({})
LightColor.args = {
  backgroundColor: "#DEE2E633",
  label: "Light",
  size: "md",
  color:"#ACAFB2"
}

export const DarkColor = Template.bind({})
DarkColor.args = {
  backgroundColor: "#21252933",
  label: "Dark",
  size: "md",
  color:"#1A1D20"
}



// Sizes

export const ExSmall = Template.bind({})
ExSmall.args = {
  label: "Ex-Small",
  size: "ex",
  backgroundColor: "#3A57E8",
  padding:"10px"
}

export const Small = Template.bind({})
Small.args = {
  label: "Small",
  size: "sm",
  backgroundColor: "#3A57E8",
  padding:"10px"
}

export const Default = Template.bind({})
Default.args={
  backgroundColor: "#3A57E8",
  label: "Default",
  size: "md",
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: "#3A57E8",
  label: "Large",
  size: "lg",
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: "red",
  label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
  size: "md",
}
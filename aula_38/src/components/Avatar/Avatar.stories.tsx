import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Avatar from './index'
import { AvatarType } from '../../types/allTypes'

export default {
    title: 'Avatar component',
    component: Avatar
} as Meta

const Template: Story<AvatarType> = (args) => <Avatar {...args}/>

export const AvatarUrl = Template.bind({})
AvatarUrl.args = {
    url: "https://github.com/wtheodoro.png"
}
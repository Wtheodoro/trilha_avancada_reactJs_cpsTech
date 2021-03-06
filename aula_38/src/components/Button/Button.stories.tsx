import React, { Component } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Button from './index'
import { ButtonType } from '../../types/allTypes'

export default {
    title: 'Button component',
    component: Button
} as Meta

const Template: Story<ButtonType> = (args) => <Button {...args} />

export const ButtonText = Template.bind({})
ButtonText.args = {
    type: "Concordo"
}
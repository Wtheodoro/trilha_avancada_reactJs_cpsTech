import React from 'react'
import { render, screen } from '@testing-library/react';
import Mensagem from './index'
import '@testing-library/jest-dom'


test('Existe o testo?', () => {
    render(<Mensagem />)
    const  msg = screen.getByTestId("paragrafo")
    expect(msg).toHaveTextContent("Você deve aceitar os termos")
})
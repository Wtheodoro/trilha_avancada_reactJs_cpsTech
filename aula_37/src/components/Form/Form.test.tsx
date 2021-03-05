import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import React from 'react'
import Form from './index'

describe('Form test', () => {

    it('input sem conjuge', async () => {
        render(<Form />)
        const formElement = screen.getByTitle("form")
        const inputNome = screen.getByTitle("nome")
        const inputCidade = screen.getByTitle("cidade")
        const inputEmail = screen.getByTitle("email")
        const inputIdade = screen.getByTitle("idade")

        userEvent.type(inputNome, "Oliver Sykes")
        userEvent.type(inputCidade, "Tokyo")
        userEvent.type(inputEmail, "Sykes.oliver@BTMH.com")
        userEvent.type(inputIdade, "34")
        fireEvent.submit(formElement)
    })

    it('input com conjuge', async () => {
        render(<Form />)
        const formElement = screen.getByTitle("form")
        const inputNome = screen.getByTitle("nome")
        const inputCidade = screen.getByTitle("cidade")
        const inputEmail = screen.getByTitle("email")
        const inputIdade = screen.getByTitle("idade")
        const inputRadio = screen.getByTitle("estadoCivil")
        const inputCasade = screen.getByTitle("casade")

        userEvent.type(inputNome, "Oliver Sykes")
        userEvent.type(inputCidade, "Tokyo")
        userEvent.type(inputEmail, "Sykes.oliver@BTMH.com")
        userEvent.type(inputIdade, "34")
        fireEvent.click(inputCasade)

        const inputNomeConjuge = await screen.findByTitle("nomeConjuge")
        userEvent.type(inputNomeConjuge, "Alissa Salls")

        fireEvent.submit(formElement)
    })

})
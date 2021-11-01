import React from 'react';

import { KeyboardView,
     Title, 
     Container, 
     Inputs, 
     ButtonSubmit ,
     TextoButtonSubmit,
     BackgroundImagemTela
    } from './styles'

function Signin(){
    return(
        <KeyboardView>
            <BackgroundImagemTela  source={require('../../assets/bk.jpg')}>

                <Container>
                
                    <Title>Login</Title>
                    <Inputs
                        placeholderTextColor="white"
                        placeholder="Usuário"
                    />
                    <Inputs
                        placeholderTextColor="white"
                        placeholder="Senha"
                        secureTextEntry
                    />
                    <ButtonSubmit><TextoButtonSubmit>Entrar</TextoButtonSubmit></ButtonSubmit>
                
                </Container>
            </BackgroundImagemTela>
        </KeyboardView>
       
        
    )
}

export default Signin;
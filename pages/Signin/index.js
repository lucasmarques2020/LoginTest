import React from 'react';
import LottieView from  "lottie-react-native";
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
                <LottieView style={{
                    flex: 1,
                    width: '50%'
                }}
                    source={require("../../assets/83043-gift-box.json")}
                    loop
                    autoPlay
                    />
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
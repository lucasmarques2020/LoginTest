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
            
            
                <Container>
                <LottieView style={{
                    flex: 1,
                    width: '70%',
                    position: 'absolute',
                    top: 0,
                    alignItems: 'center'
                }}
                    source={require("../../assets/81807-meditation-skull.json")}
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
                
        </KeyboardView>
       
        
    )
}

export default Signin;
import styled from 'styled-components/native';


export const KeyboardView = styled.KeyboardAvoidingView `
    flex:1;
`
export const Container = styled.View `
    flex: 1;
    width: 100%;
    background-color: rgba(0,0,0, 0.8);
    align-items: center;
    justify-content: center;
`
export const Title = styled.Text `
    font-size: 30px;
    margin-top: 50px;
    color: white;
`
export const Inputs = styled.TextInput`
    color: white;
    width: 80%;
    padding: 15px;
    border-bottom-width: 1px;
    border-color: rgba(255,255,255, 0.2);
    margin-bottom: 15px;
    
`
export const ButtonSubmit = styled.TouchableOpacity `
    width: 80%;
    padding: 15px;
    border-radius: 20px;
    background-color: rgba(0,170,251,1);
    align-items: center;
`
export const TextoButtonSubmit = styled.Text `
    color: white;
    font-size: 20px;
`
export const BackgroundImagemTela = styled.ImageBackground `
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
   
`

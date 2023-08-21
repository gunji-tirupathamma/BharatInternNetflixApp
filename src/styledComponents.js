import styled from 'styled-components'


export const MainContainer=styled.div`
    display: flex;
    background-image: url("https://wallpaper-house.com/data/out/9/wallpaper2you_341805.jpg") ;
    position: absolute;   
    height: 100vh;
    width: 100vw;
    background-size: cover;
    color: white;
   
    @media screen and (max-width: 576px){
        overflow: hidden;
    }
    
`

export const NavbarContainer=styled.div`
   height: 100px;
   width: 100%;
   display: flex; 
  
`

export const NavbarLogo=styled.div`
    height: 100%;
    display: flex;
    float: left;
    margin: auto;
`

export const Image=styled.img`
    height: 100px;
    position: absolute;
    left: 35px;
    @media screen and (max-width: 576px){
        height: 70px;
        width: 70px; 
         top: 15px;   
    } 
`

export const NavbarRight=styled.div`
    display: flex;
    height: 100px;
    float: right;
    position: absolute;
    right: 50px;

`
export const LanguagesSelect=styled.select`
    margin: auto;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    padding: 7px 10px;
    color: #ffffff;
    background: none;
    cursor: pointer;
    margin-right: 15px;

    @media screen and (max-width: 576px){
        font-size: 15px;
        padding: 5px 8px;       
    } 

`

export const Options=styled.option`
    background-color: gray;
`

export const SigninButton=styled.button`
    margin: auto;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 400;
    background-color: #e50914;
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    border: none;
    padding: 7px 17px;
    
    @media screen and (max-width: 576px){
        font-size: 15px;
        padding: 5px 15px;
    }
`

export const TitleContainer=styled.div`
    
    padding: 90px 45px;    

    @media screen and (max-width: 576px){
        padding: 45px 35px;       
        margin: 100px 0;         
        width: 80%;
        align-self: flex-start;
        text-align: center;
        
    }
    

`
export const ContentContainer=styled.div`
    width: 950px;
    margin: 10px;
    padding: 75px 0;
    text-align: center;

    @media screen and (max-width: 576px){
        width: 400px;        ;  
        margin: 0px; 
        text-align: left;   
    } 

`

export const Title=styled.h1`
    width: 600px;
    font-size: 2.5rem;
    margin: auto;
    text-align: center;
    @media screen and (max-width: 576px){
        width: 350px;
        font-size: 1.8rem;        
        margin-top: 2px;
        margin-left: 0px; 
        margin: 0px;
        align-self: flex-start; 
        text-align: center;
        
    }
`

export const Description1=styled.h3`
    width: 600px;
    font-size: 1.2rem;
    margin: auto;
    text-align: center;
    @media screen and (max-width: 576px){
        width: 400px;        
        margin-top: 2px;
        margin-left: 0px;        
        margin: 0px;
        text-align: left;
    }

`
export const FormContainer=styled.form`

`
export const Desription2=styled.p`
    font-size: 1rem;
    margin: 18px 0;
    text-align: center;
    @media screen and (max-width: 576px){
        font-size: 0.8rem;
        margin-left: 0px;
        margin-top: 5px;
        align-self: flex-start;
        text-align: left;
    }

`
export const EmailContainer=styled.div`
    width: 1000px;
    margin: auto;
    @media screen and (max-width: 576px){
        width: 600px;
        margin-left: 0px;
        margin-top: 5px;
        margin-right: 10px;
        text-align: left;
        align-self: flex-start;
        
        

`

export const Email=styled.input`
    height: 20px;
    width: 450px;
    margin: auto;
    padding: 20px;
    font-size: 20px;
    outline: none;
    border: 0px;
    @media screen and (max-width: 576px){
        width: 200px;
        font-size: 15px;
        height: 15px;
        padding: 10px;
        font-size: 14px;
    }
`

export const StartButton=styled.button`
    height: 62px;
    width: 180px;
    margin: auto;
    padding: 7px 17px;
    font-size: 20px;
    outline: none;
    align-items: center;
    justify-content: center;
    background-color: #e50914;
    cursor: pointer;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border: none;
    text-decoration: none;
    color: #ffffff;
    @media screen and (max-width: 576px){       
        height: 35px;
        font-size: 15px;
        width: 120px;
        padding:9px;
        font-size: 14px;
    }

`
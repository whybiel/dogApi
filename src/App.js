import React, { useState, useEffect } from "react";
import axios from "axios"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    background-image: url('https://media.istockphoto.com/photos/teal-and-white-doggy-tile-pattern-repeat-background-picture-id489553794?b=1&k=20&m=489553794&s=170667a&w=0&h=dwwT0kWSEcvaD7r9TeuG-s9r7pnMwx6VIKDYG1U5lvk=');
    @media (max-width:1000px) {
    background-image: url('https://media.istockphoto.com/vectors/trace-brown-doodle-paw-prints-seamless-pattern-background-vector-id1169439839?k=20&m=1169439839&s=612x612&w=0&h=kHR8uwONekfGBQG9eepRvO9CV2z6oImbPvenUkiwJSc=');
  }
  }
`
const Container =styled.div`
  width:97vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
`
const Text =styled.h1`
  text-align: center;
  font-size: 3em;
  font-family: 'Acme', sans-serif;
  color:#fff;
  background-color: #000;
  border-radius: 5px;
`
const DogBtn =styled.button`
  width: 20%;
  height: 3em;
  margin: 2em 0 2em 0;
  border-radius: 20px;
  border:2px solid #fff;
  background-color:#6495ED;

  &:hover{
    transition: box-shadow 3s;
    box-shadow: inset  20vw 0 #D74430;
  }
`
const Card = styled.div`
  width: 40%;
  border-radius: 10px;
  overflow: hidden;
  cursor: grab;

  @media (max-width:1000px) {
    width: 80%;
    height: 60%;
  }
  @media (max-width:500px) {
    width: 90%;
  }
`
const ImageRandom =styled.img`
  width: 100%;
  height: 40em;
  border-radius: 10px;

  &:hover{
    transform: scale(1.2);
  }
`

export default function App() {
  const [text, setText] = useState('Seu dia está ruim?')
  const [image, setImage] = useState([])

  function activeImg() {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then(prevState => {
      setImage(prevState.data.message)
    })
  }

  useEffect(()=>{
    setTimeout(()=>{
      setText('Clique no cachorro e fique feliz!')
    },5000)
  },[text])


  return (
    <Container>
      <GlobalStyle/>
      <Text>{text}</Text>
      <DogBtn style={{cursor:"pointer"}} onClick={() => {activeImg()}}><svg width="30" viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg"><path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z"/></svg></DogBtn>
      <Card><ImageRandom src={image}/></Card>
    </Container>
  );
}



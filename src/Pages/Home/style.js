import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  overflow: hidden;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }

  p{
  color: white;
  font-size: 35px;
  font-weight: 900;
  letter-spacing: 1px;
  padding-top: 2rem;

  grid-column: 2; /* Isso faz com que o <p> comece na segunda coluna */
  margin-right: 60px;
}

`;

export const Header = styled.div`
    margin-top: 50px;
    color:white;
    font-size: 35px;
    font-weight:900;
    letter-spacing: 1px;
    padding-top:2rem;
    text-shadow: 3px 6px rgba(50,50,70,0.7);
    height: 200px;
  //
  &::before {
    content: "";
    background-image: url("https://images.pexels.com/photos/7964669/pexels-photo-7964669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"); // Defina a imagem de plano de fundo aqui    background-size: cover;
    filter: blur(4px);
    background-size: cover;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 450px;
    z-index: -1;
  }
  
`;

export const Input = styled.input`
  width: 400px;
  background: linear-gradient(109.6deg, rgb(72, 200, 160) 11.2%, rgb(32, 40, 48) 91.3%);
  padding: 10px;
  font-size: 16px;
  border: 2px solid #CCCCCC;
  border-radius: 15px;
  outline: none;
`;

export const Button = styled.button`
  margin-left: 5px;
  padding: 10px 20px;
  font-size: 16px;
	background: #35bcbf; 
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);

  }

  margin-top: 20px;

`;

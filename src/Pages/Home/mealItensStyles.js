import styled from "styled-components";

export const Container = styled.div`
     width:80%;
     margin:0 auto;
    
`;

export const Cards = styled.div`
    min-width: clamp(150px, 250px, 400px);
    min-height: 510px; 
    margin: 1.5rem;
    margin-top: 40px;
    padding-bottom: 10px;
    background: linear-gradient(to left,rgb(204, 255, 51,0.5),to left,rgb(255, 255, 255,0.9));
    border-radius: 8px;
    box-shadow: 4px 9px 22px -12px rgba(80,227,194,1);    background: linear-gradient(109.6deg, rgb(72, 200, 160) 11.2%, rgb(32, 40, 48) 91.3%);
    box-sizing: border-box;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out; /* Adiciona uma transição suave */    
    position:relative;
    text-align: center;
    color: white;

    .info{
      color:white;  
      text-align: center; 
    }

    img{
      width: 100%;
    }

    .info h2{
      margin:0;
      font-weight: 900;
      margin-top: 15px;
    }
    .info p{
      margin: 0;
      font-size: 17px;
      letter-spacing: 2px;
      margin-top: 10px;
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 0;
        width: 100%;
        background: linear-gradient(109.6deg, rgb(72, 200, 160) 11.2%, rgb(32, 40, 48) 91.3%);


        transition: 0.2s all;
    }
    
    &:hover:before{
    height: 100%;  
    }
   
   &:hover{
    max-height: 1000px;
    overflow: auto;
  }

    //receita

    .recipe{
    position: absolute;
    top:0;
    left:0;
    text-align: justify;
    padding: 0.5rem 1rem;
    display: none;
    transition: 1s all;
  }
   &:hover .recipe{
    display: block;
  }
    h2{
    margin-bottom:10px;
  }
   
  .recipe img{
    width: 100px;
    height:100px;
    border-radius: 50%;
    display: block;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
}
  .recipe p{
    font-size: 18px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    width: 100%;

  }
  .recipe a{   
    display: block;
    text-align: center;
    margin-top: 10px;
    text-decoration: none;
    color:white;
  }

  
`;



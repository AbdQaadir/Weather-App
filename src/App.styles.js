import styled from 'styled-components';

export const Container = styled.div`
    width: 450px;
    margin: 40px auto;
    .container-img{
        width: 90%;
        margin: 10px auto;
    }
   
    .api-status {
        font-size: 15px;
        font-weight: 400;
        text-align: center;
        margin: 30px 0;
        border: 3px solid springgreen;
        padding: 10px;
        border-radius: 30px;
    }
    @media screen and (max-width: 450px) {
        width: 80%;
    }
`

export const Input = styled.input`
    width: 78%;
    padding: 8px 10px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid rgba(0, 0, 0, 0.15);
    margin: 0 3px;
    box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.095);
    
    @media screen and (max-width: 450px) {
        width: 100%;
    }

`
export const Button = styled.button`
    font-size: 13px;
    font-weight: 600;
    background: darkcyan;
    color: #fff;
    border: none;
    padding: 10px 13px;
    cursor: pointer;
    box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.095);
    border-radius: 3px;

    @media screen and (max-width: 450px) {
        text-align: center;
        display: block;
        margin: 10px auto;
    }
`

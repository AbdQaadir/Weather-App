import styled from 'styled-components';

export const Container = styled.div`
min-height: 250px;
border: 3px solid green;
margin-top: 30px;
padding: 20px 10px;
border-radius: 10px;
width: 100%;
text-align: center;
h4 {
    margin: 0;
}
.row-1 {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    .col {
        flex: 1;
        img {
            width: 70%;
            margin: 0 auto;
        }
        h4{
            text-align: center;
            font-size: 30px;
            font-weight: 400;
            margin: 0;
        }
        &:last-child {
            text-align: left;
        }
    }
    .weather-description{
        text-transform: capitalize;
    }
}

.row-2 {
    margin-top: 20px;
    display: flex;
    .col {
        flex: .8;
        h5 {
            font-size: 18px;
            font-weight: 400;
            margin: 0;
        }
        img {
            width: 70%;
        }
    }
  
}
`

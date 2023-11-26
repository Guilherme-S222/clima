import styled from "styled-components";

export const PrevisaoContainer = styled.div`
    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;

    h4 {
        text-align: center;
        margin-bottom: 10px;
        color: #333;
    }
    ul {
        list-style: none;
        padding: 0;

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            margin-bottom: 5px;
            color: #333;
            background-color: #fff;
            border-radius: 3px;
            box-shadow: 0px 0px 5px rgba(14, 182, 185, 0.72);

            img {
                margin-right: 10px;
            }
        }
    }
`;
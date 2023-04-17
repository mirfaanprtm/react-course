import styled from "styled-components"

export const StyledContainer = styled.div`
    padding: 30px;
    text-align: left;
    color: ${props => props.color || "black"}
`

export const StyledTitle = styled.h1`
    margin-bottom: 20px;
`
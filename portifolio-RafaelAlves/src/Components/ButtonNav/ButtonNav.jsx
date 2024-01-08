import { StyledButton } from "./StyledButtonNav"


function Button({children}) {

    return (
        <>
            <StyledButton>{children}</StyledButton>
        </>
    )
}

export default Button
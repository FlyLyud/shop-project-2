import Button from '@mui/material/Button'
import React from 'react'
type Props = {}
const Menu = (props: Props) => {
    return (
        //<div>Menu</div>
        <>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Payment</Button>
            <Button color="inherit">Shipping</Button>
            <Button color="inherit">Cart</Button>
        </>
    )
}
export default Menu

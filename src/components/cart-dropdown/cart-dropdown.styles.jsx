import styled from 'styled-components'

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton
} from '../button/button.styles'

export const CartDropdownContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto
  }

`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`

// .cart-dropdown-container {

  
//     .empty-message {

//     }
  
//     .cart-items {

//     }
  
//     button {
//       margin-top: auto;
//       font-size: 12px;
//     }

//     .button-container {
//         padding: 0px 4px;
//     }

//         /* Works on Firefox */
//     * {
//       scrollbar-width: thin;
//       scrollbar-color: grey;
//     }

//     /* Works on Chrome, Edge, and Safari */
//     *::-webkit-scrollbar {
//       width: 10px;
//     }

//     *::-webkit-scrollbar-track {
//       background: white;
//     }

//     *::-webkit-scrollbar-thumb {
//       background-color: grey;
//       border-radius: 20px;
//       border: 3px solid grey;
//     }
//   }

  
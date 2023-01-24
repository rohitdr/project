import React from 'react'
import { CDBBtn } from "cdbreact";
export default function Button(props) {
  return (
    <CDBBtn color={props.type} flat>
   {props.label}
  </CDBBtn>
  )
}

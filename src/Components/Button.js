import React from 'react'
import { CDBBtn } from "cdbreact";
export default function Button(props) {
  return (
    <CDBBtn color={props.type} href={props.href} size={props.size} flat>
   {props.label}
  </CDBBtn>
  )
}

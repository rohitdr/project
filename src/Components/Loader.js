import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    return (
      <>
      
      <div className="text-center text-success">
      <div class="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
  <span class="sr-only"></span>
</div>

      </div>
    </>
    )
  }
}

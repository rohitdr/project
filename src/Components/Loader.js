import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    return (
      <>
      
      <div className="text-center text-success">
      <div class="spinner-border" style={{width: "1rem", height: "1rem"}} role="status">
  <span class="sr-only"></span>
</div>

      </div>
    </>
    )
  }
}

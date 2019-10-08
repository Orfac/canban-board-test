import React, { Component } from 'react';
import '../styles/Card.css';

export default class Card extends Component {
  constructor(props){
    super(props);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
  }

  dragStart(e){
    e.dataTransfer.effectAllowed = "all";
    let data = e.target.innerText;
    e.dataTransfer.setData("title", e.target.innerText);
    console.log(data);
    e.currentTarget.classList.add("dragged-card");

    console.log(data);
  }

  dragEnd(e){
    this.props.takeCard(this.props.index);
  }

  render() {
    return (
      <div 
        className="card draggable" 
        draggable="true" 
        onDragStart={this.dragStart}
        onDragEnd={this.dragEnd}
      >
        {this.props.title}
      </div>
    )
  }


}

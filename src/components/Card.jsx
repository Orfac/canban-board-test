import React, { Component } from 'react';
import '../styles/Card.css';

export default class Card extends Component {
  constructor(props){
    super(props);
    this.dragStart = this.dragStart.bind(this);
  }

  dragStart(e){
    e.dataTransfer.effectAllowed = "all";
    let data = e.target.innerText;
    e.dataTransfer.setData("title", e.target.innerText);
    console.log(data);
    e.currentTarget.classList.add("dragged-card");
    this.props.takeCard(this.props.index);
    console.log(data);
  }
  render() {
    return (
      <div 
        className="card draggable" 
        draggable="true" 
        onDragStart={this.dragStart}
      >
        {this.props.title}
      </div>
    )
  }
}

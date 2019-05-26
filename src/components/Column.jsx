import React, {Component} from 'react';
import Card from "./Card";
import '../styles/Column.css';
import Appender from "./Appender";

class Column extends Component {
    constructor(props){
        super(props);
        this.state = {
            "cards" : props.cards
        };
        this.appendCard = this.appendCard.bind(this);
        this.drop = this.drop.bind(this);
        this.handleTakenCard = this.handleTakenCard.bind(this);
    }
    renderCards(){
        if (this.state.cards == null)
            return "";
        return this.state.cards.map((card, index) => {
            return <div className="column-element" key={index}>
                <Card title={card.title} index={index} takeCard={this.handleTakenCard}/>
            </div>
        })
    }
    
    handleTakenCard(index){
        let previousCards = [...this.state.cards];
        previousCards.splice(index,1);
        this.setState({
            cards : previousCards
        });
    }

    appendCard(title){
        if (this.state.cards == null){
            this.setState({
                "cards" : [{
                    "title" : title
                }]
            })
        } else {
            this.setState({cards:[...this.state.cards, {
                "title" : title
            }]});
        }
        
    }

    dragOver(e){
        e.preventDefault();
    }

    drop(e){
        e.preventDefault();
        this.appendCard(e.dataTransfer.getData("title"));

    }

    render() {
        return (
            <div 
                className="column" 
                onDragOver={this.dragOver}
                onDrop={this.drop}
            >
                <div className="title">{this.props.title}</div>
                {this.renderCards()}
                <div className="bottom">
                    <Appender 
                        closedText={"Добавить ещё одну карточку"} 
                        buttonText={"Добавить карточку"} 
                        openedText={"Введите название карточки"}
                        append={this.appendCard}
                    />
                </div>
            </div>
        );
    }
}

export default Column;
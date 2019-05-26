import React, { Component } from 'react'
import '../styles/Appender.css';

export default class Appender extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpened : false,
            value : ""
        };
        this.handleOpenClick = this.handleOpenClick.bind(this);
        this.handleAppendClick = this.handleAppendClick.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }
    
    handleOpenClick(){
        this.setState({
            isOpened: !(this.state.isOpened),
            value : ""
        });
    }

    handleChangeText(event){
        this.setState({value: event.target.value});
    }

    handleAppendClick(){
        if (this.state.value !== ""){
            this.props.append(this.state.value);
            this.setState({
                isOpened: false
            });
        }
    }

    render() {
        let isOpened = this.state.isOpened;
        return (
            <div className="appender">
                {isOpened ? (
                    <div className="appender-opened">
                        <textarea 
                            cols="5" 
                            rows="3"
                            value={this.state.value} 
                            onChange={this.handleChangeText} 
                            placeholder={this.props.openedText}
                            
                        >
                        </textarea>

                        <button onClick={this.handleAppendClick}>
                            <b>{this.props.buttonText}</b> 
                        </button>
                        <span><button onClick={this.handleOpenClick}>Убрать</button></span>
                    </div>
                ) : (
                    <div onClick={this.handleOpenClick}>
                        {this.props.closedText}
                    </div>
                )}
            </div>
        )
        
    }
}

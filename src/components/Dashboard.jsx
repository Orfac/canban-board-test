import React, {Component} from 'react';
import Column from "./Column";
import '../styles/Dashboard.css';
import Appender from './Appender';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            "columns" : props.columns
        };
        this.appendColumn = this.appendColumn.bind(this);
    }
    renderColumns = () =>{
        return this.state.columns.map((column, index) =>{
            return <Column key={index} cards={column.cards} title={column.title}/>
        });
    };

    appendColumn(title){
        this.setState({columns:[...this.state.columns, {
            "title" : title,
            "cards" : null
        }]});
    }
    render() {
        return (
            <div className="dashboard">
                {this.renderColumns()}
                <Appender 
                        closedText={"Добавить ещё одну колонку"} 
                        buttonText={"Добавить колонку"} 
                        openedText={"Введите название колонки"}
                        append={this.appendColumn}
                    />
            </div>
        );
    }
}

export default Dashboard;
import React from 'react';
import Materialtem from './Materialtem';

export default class MaterialContainer extends React.Component {
    render() {
        const allItems = this.props.todoItems.map(function (task, index) {
            return <Materialtem taskName={task} key={index} />;
        });

        return (
            <div>
                <ul>
                    {allItems}
                </ul>

                <h1>Things I Should Start Doing:</h1>
                <Materialtem todoItems={this.state.toDoItems} />
                <hr />
                <form>
                    <input type="text"
                        placeholder="Type an Item Here!"
                        value={this.state.newItem}
                        onChange={this.onTextBoxChange}
                    />
                    <button onClick={this.addItem}>Add Item!</button>
                </form>
            </div>
        );
    }
}
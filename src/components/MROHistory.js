import React from 'react'
import UpdateMRO from './UpdateMRO'

export default class MROHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            id: '',
        }
    }

    onClose = () => {
        this.setState({ isOpen: false })
    }

    onOpen = () => {
        this.setState({ isOpen: true, id: this.props.id })
    }

    render() {
        return (
            <div>
                <UpdateMRO
                    onClose={this.onClose}
                    isOpen={this.state.isOpen}
                    id={this.state.id}
                    updateRow={this.props.updateRow}
                    getMaterialById={this.props.getMaterialById}
                />
                <div>
                    <div>
                        <div>

                            <h1>title</h1>
                            <h1>body</h1>
                            <h1>quantity</h1>
                            <h1>Actions</h1>
                        </div>
                    </div>
                    <div>
                        {this.props.data.map(row => (

                            <div key={row.id}>
                                <h3>{row.title}</h3>
                                <h3>{row.body}</h3>
                                <h3>{row.id}</h3>
                                <h3>
                                    <button
                                        content="Edit"
                                        onClick={() => {
                                            this.setState({ isOpen: true, id: row.id })
                                        }}
                                    />
                                    <button
                                        content="Delete"
                                        onClick={() => {
                                            this.props.deleteRow(row.id)
                                        }}
                                    />
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

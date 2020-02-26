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
                            <h1>materialCode</h1>
                            <h1>quantity</h1>
                            <h1>Actions</h1>
                        </div>
                    </div>
                    <div>
                        {this.props.data.map(row => (
                            <div key={row.materialCode}>
                                <h3>{row.materialCode}</h3>
                                <h3>{row.quantity}</h3>
                                <h3>
                                    <button
                                        content="Edit"
                                        onClick={() => {
                                            this.setState({ isOpen: true, id: row.materialCode })
                                        }}
                                    />
                                    <button
                                        content="Delete"
                                        onClick={() => {
                                            this.props.deleteRow(row.materialCode)
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

import React from 'react'
import UpdateMRO from './UpdateMRO'
import { Button, Card, Badge } from 'react-bootstrap'

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
                <hr />
                <div>
                    <h1><Badge variant="secondary">Update Material Request Order</Badge></h1>
                    {this.props.data.map(row => (
                        <Card className="text-left" key={row.id} style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Material Code: {row.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Quantity: {row.id}</Card.Subtitle>
                                <Card.Text>Description: {row.body}</Card.Text>

                                <Button content="Edit"
                                    onClick={() => {
                                        this.setState({ isOpen: true, id: row.id })
                                    }} variant="dark">Edit</Button>
                                {' '}
                                <Button content="Delete"
                                    onClick={() => {
                                        this.props.deleteRow(row.id)
                                    }} variant="dark">Delete</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }
}

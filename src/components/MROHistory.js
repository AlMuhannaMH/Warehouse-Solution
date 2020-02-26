import React from 'react'
import UpdateMRO from './UpdateMRO'
// import ListItem from './ListItem'

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
        // const allFruits = this.props.data.map(function (data, index) {
        //     return <ListItem key={index} data={data} deleteRow={this.props.deleteRow} />;
        // });
        console.log(this.props.data);

        const { isOpen, id } = this.state
        const { data, deleteRow, updateRow, getMaterialById } = this.props

        return (
            <div>
                <UpdateMRO
                    onClose={this.onClose}
                    isOpen={isOpen}
                    id={id}
                    updateRow={updateRow}
                    getMaterialById={getMaterialById}
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
                        {/* {allFruits} */}

                        {data.map(row => (
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
                                            deleteRow(row.materialCode)
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

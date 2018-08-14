import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import PropTypes from 'prop-types';


class UsersList extends Component {

    static propTypes = {
        openModal: PropTypes.func.isRequired,
        clients: PropTypes.array
    }

    get columns() {
        return [
            {key: 'first_name', name: 'Client name:'},
        ];
    }

    get rows() {
        return this.props.clients;
    }

    rowGetter = (i) => {
        return this.rows[i];
    }

    onRowClick = (rowIdx, row) => {
        this.props.openModal(row.id);
    }

    render() {
        return (
            <ReactDataGrid
                columns={this.columns}
                rowGetter={this.rowGetter}
                rowsCount={this.rows.length}
                minHeight={500}
                onRowClick={this.onRowClick} />
        );
    }
}

export default UsersList;
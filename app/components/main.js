import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

let request = axios.create({
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
});

import * as CmsActions from '../store/cms-actions.js';

import { ListOfItems } from './list-items.js';
import { AddItem } from './forms/item-form.js';


class App extends React.Component {

	constructor(props) {
		super(props);
		this.handleAddItem = this.handleAddItem.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.setItemStatus = this.setItemStatus.bind(this);
	}

	componentDidMount() {
		request.get(this.props.apiUrl)
			.then((response) => this.props.actions.getAllData(response.data))
			.catch((err) => console.log(err));

	}

	handleAddItem(video) {
		request.post(this.props.apiUrl, video)
			.then((response) => this.props.actions.addItem(JSON.parse(response.config.data)))
			.catch((err) => console.log(err));
	}

	setItemStatus(item, status){

		item.status = status;

		request.put(`${this.props.apiUrl}/${item.id}`, item)
			.then((response) => {
				this.props.actions.updateStatus(JSON.parse(response.config.data));
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		const { items, actions } = this.props;

		return (
			<div>
				<h2>CMS Test</h2>
				<AddItem items={items} actions={actions} addItem={this.handleAddItem} />
				<ListOfItems items={items} handleSetStatus={this.setItemStatus} />
			</div>
		);
	}
}



function mapStateToProps(state) {
  return {
    items: state.cms
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CmsActions, dispatch)
  }
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
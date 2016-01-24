import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CmsActions from '../store/cms-actions.js';

import { ListOfItems } from './list-items.js';
import { AddItem } from './add-item.js';


class App extends React.Component {

	constructor(props) {
		super(props);
		this.handleAddVideo = this.handleAddVideo.bind(this);
	}

	handleAddVideo(video) {
		this.props.actions.addVideo(video);
	}

	render() {
		
		const { items, actions } = this.props;

		return (
			<div>
				<h2>CMS Test</h2>
				<AddItem items={items} actions={actions} addVideo={this.handleAddVideo} />
				<ListOfItems items={items} />
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
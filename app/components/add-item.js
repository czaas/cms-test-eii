import React from 'react';

export class AddItem extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.newItem = this.newItem.bind(this);
	}

	newItem(e) {

		e.preventDefault();

		let newVideo = {
			"type": "video",
			"id": this.props.items.length,
			"meta_data": {
				"title": this.refs.meta_title.value,
				"keywords": this.refs.meta_keywords.value,
				"description": this.refs.meta_description.value
			},
			"content": {
				"title": this.refs.content_title.value,
				"body": this.refs.content_body.value
			}
		};

		this.props.addVideo(newVideo);
		this.refs.add_item_form.reset();
	}

	render() {
		return (
			<form ref="add_item_form" onSubmit={this.newItem}>
				<input type="text" ref="content_title" placeholder="On Page title" />
				<input type="text" ref="content_body" placeholder="On Page description" />

				<input type="text" ref="meta_title" placeholder="Meta title" />
				<input type="text" ref="meta_description" placeholder="Meta description" />
				<input type="text" ref="meta_keywords" placeholder="Meta Keywords" />
				<button>Add New Item</button>
			</form>
		);
	}
}

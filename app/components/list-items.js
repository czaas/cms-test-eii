import React from 'react';

export class ListOfItems extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		let allItems = this.props.items.map((item, i) => {
			return (
				<div key={item.id}>
					<p><strong>{item.content.title}</strong></p>
					<p>{item.content.body}</p>
					<p><strong>Status</strong>: {item.status}</p>
					<a onClick={this.props.handleDeleteItem.bind(this, item)}>Delete</a>
					<hr />
				</div>
			)
		});
		
		return (
			<div>
				{allItems}
			</div>
		);
	}
}

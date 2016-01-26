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

					<p>Select Status:</p>
					<a onClick={this.props.handleSetStatus.bind(this, item, 'published')}>Publish</a> | 
					<a onClick={this.props.handleSetStatus.bind(this, item, 'draft')}>Draft</a> | 
					<a onClick={this.props.handleSetStatus.bind(this, item, 'deleted')}>Delete</a>
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

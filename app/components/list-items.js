import React from 'react';

export class ListOfItems extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		let allItems = this.props.items.map((item, i) => {
			return (
				<div key={i}>
					<p><strong>{item.content.title}</strong></p>
					<p>{item.content.body}</p>
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

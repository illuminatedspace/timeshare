import React from 'react'
import {Link} from 'react-router'
import FlatButton from 'material-ui/FlatButton'

export default function Categories (props) {
	
	const categories = [{id: 1, name: "one-offs"}, {id: 2, name: "deluxe"}, {id: 2, name: "health benefits"}]

	return (
		<div>
			<FlatButton 
				label={categories[0].name}
				href={`/category/${categories[0].id}`}
				style={{
					color: '#81D4FA',
				}}>
			</FlatButton>

			<FlatButton 
				label={categories[1].name}
				href={`/category/${categories[1].id}`}
				style={{
					color: '#81D4FA',
				}}>
			</FlatButton>

			<FlatButton 
				label={categories[2].name}
				href={`/category/${categories[2].id}`}
				style={{
					color: '#81D4FA',
				}}>
			</FlatButton>
		</div>
	)
} 

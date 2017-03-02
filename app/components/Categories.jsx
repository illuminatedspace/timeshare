import React from 'react'
import {Link} from 'react-router'

export default function Categories (props) {
	
	const categores = props.categories

	return (
		<ul className = "categories-nav">
			{categories.map((category) => {
				<li><Link to={`/category/${category.id}`}>{category.name}</Link></li>
			})}
		</ul>
	)

} 

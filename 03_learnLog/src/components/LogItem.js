// item container
import React from 'react'
import {MyDate} from './MyDate'

export const LogItem = () => {
	return (
		<div className='item'>
			<MyDate />
			<div className="content">
				<h2 className="description">study React</h2>
				<div className="time">40m</div>
			</div>
		</div>
	)
}

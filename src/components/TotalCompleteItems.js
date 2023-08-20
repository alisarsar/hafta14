import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
	const todos = useSelector(state=>state.todos)
	const tamamlananIsler = todos.filter(item=>item.completed===true)

	return <h4 className='mt-3'>Tamamlanan İşler: {tamamlananIsler.length + "/" + todos.length}</h4>;
};

export default TotalCompleteItems;

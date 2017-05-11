export 	const cardFilter = (state,action) =>{
	console.log(state);
	switch(action.type){
		case 'FILTER_CARDS':
			return action.data;
		default:
			return state || '';
	}
}

export const showBack=(state,action) =>{
	switch(action.type){
		case 'SHOW_BACK':
			return action.data || false;
		default:
			return state || false;

	}
}
import AppDispatcher from './dispatcher';
import constants from './constants'
export default Action = {
	getTitles(d){
		AppDispatcher.dispatch({
			type: constants.GET_TITLES,
			data:d
		})
	}
	getEssay(d){
		AppDispatcher.dispatch({
			type: constants.GET_ESSAY,
			data:d
		})
	}
}
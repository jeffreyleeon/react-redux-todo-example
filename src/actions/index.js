import todoActions from './todoActions';
import filterActions from './filterActions';

const actions = {
	...todoActions,
	...filterActions,
};

export default actions;
import {toast} from 'react-toastify';

export default store => next => action => {
    if (action.type && action.type.endsWith('/fulfilled')) {
        toast.success("Wow so easy !");
    }
    if (action.error && action.error.name === 'UserError') {
        toast.error(action.error.message);
    }
    next(action)
}

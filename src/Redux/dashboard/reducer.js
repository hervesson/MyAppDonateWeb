import { SET_ACTIVE_TAB } from './constants';

const INIT_STATE = {
	activeTab : "dashboard"
};

const Dashboard = (state = INIT_STATE, action) => {
    console.log(action)
    switch (action.type) {
       case SET_ACTIVE_TAB:
			return {...state, activeTab: action.payload	};
      
    	default: return { ...state };
    }
}

export default Dashboard;
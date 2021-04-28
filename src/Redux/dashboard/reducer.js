import { SET_ACTIVE_TAB, SET_DADOS_BANCARIOS, SUCESS_DADOS_BANCARIOS} from './constants';

const INIT_STATE = {
	activeTab : "dashboard",
	loading: false
};

const Dashboard = (state = INIT_STATE, action) => {
   console.log(action)
   switch (action.type) {
      case SET_ACTIVE_TAB:
			return {...state, activeTab: action.payload	};

		case SET_DADOS_BANCARIOS:
			return {...state, loading: true	};

		case SUCESS_DADOS_BANCARIOS:
			return {...state, loading: false	};		
      
    	default: return { ...state };
    }
}

export default Dashboard;
import {
    SET_ACTIVE_TAB,
    SET_DADOS_BANCARIOS,
    SUCESS_DADOS_BANCARIOS
} from "./constants";

export const setActiveTab = (tabId) => ({
    type: SET_ACTIVE_TAB,
    payload: tabId
});

export const setDadosBancarios = (banco, conta, digito, tipopix, pix) => ({
    type: SET_DADOS_BANCARIOS,
    payload : { banco, conta, digito, tipopix, pix }  
});

export const sucessDadosBancarios = () => ({
    type: SUCESS_DADOS_BANCARIOS
});


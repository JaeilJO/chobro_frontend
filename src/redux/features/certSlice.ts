import { createSlice } from '@reduxjs/toolkit';

export interface CertType {
    url: string;
    certificate: string;
    expiration_date: string;
    is_active: string;
    cert_id: string;
    created_at: string;
    updated_at: string;
}
export interface certState {
    activeCert: CertType[];
    inactiveCert: CertType[];
}

const initialState: certState = {
    activeCert: [
        {
            url: '',
            certificate: '',
            expiration_date: '',
            is_active: '',
            cert_id: '',
            created_at: '',
            updated_at: '',
        },
    ],
    inactiveCert: [
        {
            url: '',
            certificate: '',
            expiration_date: '',
            is_active: '',
            cert_id: '',
            created_at: '',
            updated_at: '',
        },
    ],
};

export const certSlice = createSlice({
    name: 'cert',
    initialState,
    reducers: {
        getActiveCert: (state, action) => {
            state.activeCert.push(action.payload);
        },
        getInctiveCert: (state, action) => {
            state.inactiveCert.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { getActiveCert, getInctiveCert } = certSlice.actions;

export default certSlice.reducer;

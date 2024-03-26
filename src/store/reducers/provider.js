import { createSlice } from '@reduxjs/toolkit'

export const provider = createSlice({
	name: 'provider',
	initialState: {
		connection: null,
		chaindId: null,
		account: null
	},
	reducers: {
		setProvider: (state, action) => {
			state.connection = action.payload
		},
		setNetwork: (state, action) => {
			state.chaindId = action.payload
		},
		setAccount: (state, action) => {
			state.account = action.payload
		}
		
	}
})

export const { setProvider, setNetwork, setAccount } = provider.actions;

export default provider.reducer;
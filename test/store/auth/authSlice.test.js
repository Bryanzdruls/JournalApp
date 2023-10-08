import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures";

describe('probando authslice', () => {
  
    test('debe de retornar el initialState ', () => {
      expect( authSlice.name ).toBe('auth');
      const state = authSlice.reducer( initialState,{});

      expect( state ).toEqual( initialState );
    })
    
    test('debe realizar autenticacion', () => {
      const state = authSlice.reducer(initialState, login( demoUser ));      
      expect(state).toEqual({
        status: 'authenticated', //checking, not-authenticated, authenticated
        uid: demoUser.uid,
        email: demoUser.email,
        displayName: demoUser.displayName,
        photoUrl: demoUser.photoUrl,
        errorMessage: null,
      })
    })

    test('debe de realizar el logout sin argumentos ', () => {
      const state = authSlice.reducer(authenticatedState, logout())
      
      expect( state ).toEqual( notAuthenticatedState );
    })

    test('debe de realizar el logout y mostrar error (argumento) ', () => {
      const errorMessage  ='credentials not valid';

      const state = authSlice.reducer(authenticatedState, logout({errorMessage}));
      expect( state.errorMessage ).toEqual(errorMessage);
    })

    test('debe cambiar de estado a checking', () => {
        const state = authSlice.reducer(authenticatedState, checkingCredentials());
        expect (state.status).toBe('checking')
    })
    
})

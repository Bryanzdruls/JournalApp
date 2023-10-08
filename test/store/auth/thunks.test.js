
import { loginWithEmailPassword, signInWithGoogle } from "../../../src/firebase/provider";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../../src/store/auth/thunks"
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/provider');
describe('pruebas en authThunks', () => {
    const dispatch =jest.fn();
  
    beforeEach( ()=> jest.clearAllMocks() );

    test('debe de invocar el chekingCredentials', async() => {
        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith( {"payload": {"email": undefined, "password": undefined}, "type": "auth/checkingCredentials"} );

    })
    

    test('start googleSignIn debe llamar login si todo sale bien', async() => {
        const loginData = {ok: true, ...demoUser }

        await signInWithGoogle.mockResolvedValue( loginData );

        //thunk para probar
        await startGoogleSignIn()(dispatch);

        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());
        expect( dispatch ).toHaveBeenCalledWith(login( loginData ));

    })

    test('start googleSignIn debe llamar checking credentias y logout', async() => {
        const loginData = {ok: false, errorMessage: 'Un error En google' }
        const {errorMessage} = loginData
        await signInWithGoogle.mockResolvedValue( loginData );

        //thunk para probar
        await startGoogleSignIn()(dispatch);
        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());
        expect( dispatch ).toHaveBeenCalledWith(logout( errorMessage ));

    })

    test('startLoginEmailAndPassword  debe de llamar checking credentials y login-exito', async() => {
        const loginData = {ok: true, ...demoUser }
        const formData = {email: demoUser.email, password: '123456'}
        await loginWithEmailPassword.mockResolvedValue( loginData );
        
        //thunk para probar
        await startLoginWithEmailPassword(formData)(dispatch);
        
        console.log(dispatch);
        
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        //expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
        
    })
    
    
   /*  test('startCreatingEmailAndPassword ', async() => {
        const loginData = {ok: false, errorMessage: 'Un error En google' }
        
        
        //thunk para probar
        await signInWithGoogle.mockResolvedValue( loginData );
        await startGoogleSignIn()(dispatch);
        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());
        expect( dispatch ).toHaveBeenCalledWith(logout( errorMessage ));

    }) */
    
})

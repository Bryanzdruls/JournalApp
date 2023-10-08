export const initialState = {
    status: 'checking', //checking, not-authenticated, authenticated
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,

}
export const authenticatedState = {
    status: 'authenticated', //checking, not-authenticated, authenticated
    uid: '123ABC',
    email: 'demo@google.com',
    displayName: 'Demo User',
    photoUrl: 'https://demo.jpg',
    errorMessage: null,
}
export const notAuthenticatedState = {
    status: 'not-authenticated', //checking, not-authenticated, authenticated
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: undefined,
}

export const demoUser ={
    uid: '123ABC',
    email: 'demo@google.com',
    displayName: 'Demo User',
    photoUrl: 'https://demo.jpg',
}
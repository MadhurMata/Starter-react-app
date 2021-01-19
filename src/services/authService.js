//Mock service, ready  to  swap for backend API

export const login = (userCredentials) => {
    return new Promise((res, rej) => {
        const { userName, password } = userCredentials;

        if (userName === 'admin' && password === 'admin') {
            const user = {
                userName,
                token: '674yfguhd9jqw'
            };
            res(user);
        } else {
            rej({
                message: 'invalid Credentials'
            });
        }
    });
};

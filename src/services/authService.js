//Mock service, ready  to  swap for backend API

export const login = async (data) => {
    try {
        return await new Promise((res, rej) => {
            const { userName, password } = data.userCredentials;

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
    } catch (e) {
        console.log("The repositories couldn't be loaded", e);
    }
};

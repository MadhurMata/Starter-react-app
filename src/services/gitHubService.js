export const fetchData = async () => {
    try {
        const response = await fetch(
            `https://api.github.com/search/repositories?q=per_page=20&page=${'1'}`
        );
        const data = await response.json();
        console.log('service', data);
        return data.items;
    } catch (e) {
        console.log("The repositories couldn't be loaded", e);
    }
};

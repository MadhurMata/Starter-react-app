export const fetchData = async () => {
    try {
        const response = await fetch(
            `https://api.github.com/search/repositories?q=created:>${'2017-10-22'}&sort=stars&order=desc&page=${'1'}`
        );
        const data = await response.json();
        return data.items;
    } catch (e) {
        console.log("The repositories couldn't be loaded", e);
    }
};

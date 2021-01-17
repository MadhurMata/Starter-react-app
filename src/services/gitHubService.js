export const fetchData = async (pageNumber) => {
    try {
        const response = await fetch(
            `https://api.github.com/search/repositories?q=page=${pageNumber}&per_page=20`
        );
        const data = await response.json();
        return data.items;
    } catch (e) {
        console.log("The repositories couldn't be loaded", e);
    }
};

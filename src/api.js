
const responseApi = async() => {
    const apiUrl = "https://dummyjson.com/recipes"
    const resonse = await fetch(apiUrl,{ method:"GET"});
    return await resonse.json();
}

export default responseApi;
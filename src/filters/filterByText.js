const filterByText = (searchText, coins) => {
    if (searchText === "") return coins;
    let filteredByText = coins.filter((elem)=>{
      if(elem.name.toLowerCase().includes(searchText.toLowerCase()) || elem.symbol.toLowerCase().includes(searchText.toLowerCase())) return true;
      return false;
    });
    return filteredByText;
};

export default filterByText;
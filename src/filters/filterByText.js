const filterByText = (searchText, coins) => {
    let filteredByText = coins.filter((elem)=>{
      if(elem.name.toLowerCase().includes(searchText.toLowerCase()) || elem.symbol.toLowerCase().includes(searchText.toLowerCase())) return true;
      return false;
    });
    return filteredByText;
};

export default filterByText;
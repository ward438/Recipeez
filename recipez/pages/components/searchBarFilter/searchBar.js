
export const SearchBarFilter = ({searchValue, setFilteredInput,breakfastMealData,lunchMealData,dinnerMealData,treatsMealData,appetizerRecipes}) => {
    let combinedDataArr = [breakfastMealData,lunchMealData,dinnerMealData,treatsMealData,appetizerRecipes]

    const handleCompare = (userInput,combinedDataArr) => {
        let data = combinedDataArr; 
        if(data.length !== undefined & data.length !== null) {            
            data.filter(item => {       
                Object.values(item).filter(item => {                    
                    if(item?.name === userInput || item?.description === userInput) {
                        return setFilteredInput(item)
                    }
                })             
            })    
        }
        return
    }
    
    handleCompare(searchValue,combinedDataArr)
    
    return 



}
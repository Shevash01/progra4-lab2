export const getSavedCount = () => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount, 10) : 0; 
  };
  
  export const saveCount = (count) => {
    localStorage.setItem('count', count);
  };
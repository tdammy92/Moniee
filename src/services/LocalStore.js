import AsyncStorage from '@react-native-async-storage/async-storage';







const storeData = async(key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
      
    } catch (e) {
        alert(`Can not save ${key}`)
    }
}



// const getData = async(key) => {

//     try {
//         const jsonValue = await AsyncStorage.getItem(key)
      
//         const res = jsonValue !== null
//             ? JSON.parse(jsonValue)
//             : [];

//         return res



//     } catch (e) {
//         alert(`Can not retrive ${key}`)
//     }

// }

const getData = async (key) => {
    // get Data from Storage
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };


 
const removeData = async(key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        alert(`Can not Clear ${key}`)
    }

    console.log(`${key} removed successfully`)
}

export {storeData, getData, removeData}
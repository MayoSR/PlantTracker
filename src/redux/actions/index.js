export function openPlantData(plantId){
    return {
        plantId:plantId,
        type:"OPEN_PLANT_DATA"
    }
}
export function closePlantData(){
    return {
        type:"CLOSE_PLANT_DATA"
    }
}
export function viewYourPlants(){
    return {
        type:"VIEW_YOUR_PLANTS"
    }
}
export function addNewPlant(plantId){
    return {
        plantId:plantId,
        type:"ADD_NEW_PLANT"
    }
}
export function getSelectedPlant(){
    return{
        type:"GET_SELECTED_PLANT"
    }
}
export function updateYourPlantData(updateData,plantID){
    return{
        plantID:plantID,
        data:updateData,
        type:"UPDATE_YOUR_PLANT_DATA"
    }
}
function formatDate(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    //return dd + '/' + mm + '/' + yyyy;
    return yyyy + '-' + mm + '-' + dd;

}

const initialState = {
    plantData: {
        plant1: {
            plantName: "Agatas Mumandas",
            plantCost: "$60",
            plantType: "Home Plant",
            plantGenus: "Ficus",
            plantInfo: "Ficus is a genus of about 850 species of woody trees, shrubs, vines, epiphytes and hemiepiphytes in the family Moraceae.",
            plantHeight: "20-30 cm",
            plantWateringSchedule: "1 - 2 per week",
            plantTemperature: "Slightly Sunny",
            plantImgURL: "1.jpg",
            plantTaskList: {
                "Water": {
                    taskData: "Daily once",
                    taskCompletedAt: null
                },
                "Fertilize": {
                    taskData: "Once every two weeks",
                    taskCompletedAt: null
                },
                "Pruning": {
                    taskData: "Every week",
                    taskCompletedAt: null
                },
            },
        },
        plant2: {
            plantName: "Monstera Deliciosa",
            plantCost: "$80",
            plantType: "Home Plant",
            plantGenus: "Ficus",
            plantInfo: "Ficus is a genus of about 850 species of woody trees, shrubs, vines, epiphytes and hemiepiphytes in the family Moraceae.",
            plantHeight: "20-30 cm",
            plantWateringSchedule: "1 - 2 per week",
            plantTemperature: "Slightly Sunny",
            plantImgURL: "2.jpg",
            plantTaskList: {
                "Water": {
                    taskData: "Daily once",
                    taskCompletedAt: null
                },
                "Fertilize": {
                    taskData: "Once every two weeks",
                    taskCompletedAt: null
                },
                "Pruning": {
                    taskData: "Every week",
                    taskCompletedAt: null
                },
            },
        },
        plant3: {
            plantName: "Ficus Wariat",
            plantCost: "$120",
            plantType: "Home Plant",
            plantGenus: "Ficus",
            plantInfo: "Ficus is a genus of about 850 species of woody trees, shrubs, vines, epiphytes and hemiepiphytes in the family Moraceae.",
            plantHeight: "20-30 cm",
            plantWateringSchedule: "1 - 2 per week",
            plantTemperature: "Slightly Sunny",
            plantImgURL: "3.jpg",
            plantTaskList: {
                "Water": {
                    taskData: "Daily once",
                    taskCompletedAt: null
                },
                "Fertilize": {
                    taskData: "Once every two weeks",
                    taskCompletedAt: null
                },
                "Pruning": {
                    taskData: "Every week",
                    taskCompletedAt: null
                },
            },
        },
        plant4: {
            plantName: "Sansivera Snake Plant",
            plantCost: "$50",
            plantType: "Home Plant",
            plantGenus: "Ficus",
            plantInfo: "Ficus is a genus of about 850 species of woody trees, shrubs, vines, epiphytes and hemiepiphytes in the family Moraceae.",
            plantHeight: "20-30 cm",
            plantWateringSchedule: "1 - 2 per week",
            plantTemperature: "Slightly Sunny",
            plantImgURL: "4.jpg",
            plantTaskList: {
                "Water": {
                    taskData: "Daily once",
                    taskCompletedAt: null
                },
                "Fertilize": {
                    taskData: "Once every two weeks",
                    taskCompletedAt: null
                },
                "Pruning": {
                    taskData: "Every week",
                    taskCompletedAt: null
                },
            },
        },
        plant5: {
            plantName: "Plant 1",
            plantCost: "$60",
            plantType: "Home Plant",
            plantGenus: "Ficus",
            plantInfo: "Ficus is a genus of about 850 species of woody trees, shrubs, vines, epiphytes and hemiepiphytes in the family Moraceae.",
            plantHeight: "20-30 cm",
            plantWateringSchedule: "1 - 2 per week",
            plantTemperature: "Slightly Sunny",
            plantImgURL: "5.jpg",
            plantTaskList: {
                "Water": {
                    taskData: "Daily once",
                    taskCompletedAt: null
                },
                "Fertilize": {
                    taskData: "Once every two weeks",
                    taskCompletedAt: null
                },
                "Pruning": {
                    taskData: "Every week",
                    taskCompletedAt: null
                },
            },
        },
        plant6: {
            plantName: "Plant 1",
            plantCost: "$60",
            plantType: "Home Plant",
            plantGenus: "Ficus",
            plantInfo: "Ficus is a genus of about 850 species of woody trees, shrubs, vines, epiphytes and hemiepiphytes in the family Moraceae.",
            plantHeight: "20-30 cm",
            plantWateringSchedule: "1 - 2 per week",
            plantTemperature: "Slightly Sunny",
            plantImgURL: "6.jpg",
            plantTaskList: {
                "Water": {
                    taskData: "Daily once",
                    taskCompletedAt: null
                },
                "Fertilize": {
                    taskData: "Once every two weeks",
                    taskCompletedAt: null
                },
                "Pruning": {
                    taskData: "Every week",
                    taskCompletedAt: null
                },
            },
        },
        plant7: {
            plantName: "Plant 1",
            plantCost: "$60",
            plantType: "Home Plant",
            plantGenus: "Ficus",
            plantInfo: "Ficus is a genus of about 850 species of woody trees, shrubs, vines, epiphytes and hemiepiphytes in the family Moraceae.",
            plantHeight: "20-30 cm",
            plantWateringSchedule: "1 - 2 per week",
            plantTemperature: "Slightly Sunny",
            plantImgURL: "7.jpg",
            plantTaskList: {
                "Water": {
                    taskData: "Daily once",
                    taskCompletedAt: null
                },
                "Fertilize": {
                    taskData: "Once every two weeks",
                    taskCompletedAt: null
                },
                "Pruning": {
                    taskData: "Every week",
                    taskCompletedAt: null
                },
            },
        },
    },
    plantBoxOpen: 1,
    selectedPlant: null,
    plantView: 0,
    yourPlants: {
        1: {

            plantName: "Agatas Mumandas",
            plantCost: "$60",
            plantType: "Home Plant",
            plantGenus: "Ficus",
            plantInfo: "Ficus is a genus of about 850 species of woody trees, shrubs, vines, epiphytes and hemiepiphytes in the family Moraceae.",
            plantHeight: "20-30 cm",
            plantWateringSchedule: "1 - 2 per week",
            plantTemperature: "Slightly Sunny",
            plantImgURL: "1.jpg",
            plantTaskList: {
                "Water": {
                    taskData: "Daily once",
                    taskCompletedAt: null
                },
                "Fertilize": {
                    taskData: "Once every two weeks",
                    taskCompletedAt: null
                },
                "Pruning": {
                    taskData: "Every week",
                    taskCompletedAt: null
                },
            },
        },
        2: {
            plantName: "Monstera Deliciosa",
            plantCost: "$80",
            plantType: "Home Plant",
            plantGenus: "Ficus",
            plantInfo: "Ficus is a genus of about 850 species of woody trees, shrubs, vines, epiphytes and hemiepiphytes in the family Moraceae.",
            plantHeight: "20-30 cm",
            plantWateringSchedule: "1 - 2 per week",
            plantTemperature: "Slightly Sunny",
            plantImgURL: "2.jpg",
            plantTaskList: {
                "Water": {
                    taskData: "Daily once",
                    taskCompletedAt: null
                },
                "Fertilize": {
                    taskData: "Once every two weeks",
                    taskCompletedAt: null
                },
                "Pruning": {
                    taskData: "Every week",
                    taskCompletedAt: null
                },
            },
        },
    }
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case "OPEN_PLANT_DATA":
            return { ...state, selectedPlant: action.plantId, plantBoxOpen: 0 }
        case "VIEW_YOUR_PLANTS":
            return { ...state, plantView: 1 }
        case "ADD_NEW_PLANT":
            var genId = parseInt(Math.random() * 1000000)
            return { ...state, yourPlants: { ...state.yourPlants, [genId]: action.plantId } }
        case "CLOSE_PLANT_DATA":
            return { ...state, selectedPlant: null, plantBoxOpen: 1, plantView: 0 }
        case "UPDATE_YOUR_PLANT_DATA":
            let yourPlantsTemp = state.yourPlants
            Object.keys(action.data).forEach(ele => {
                action.data[ele].forEach(task => {
                    yourPlantsTemp[ele].plantTaskList[task].taskCompletedAt = formatDate(new Date())
                })
            })
            return {...state,yourPlants:{...state.yourPlants,...yourPlantsTemp}}
        default:
            return state
    }
}
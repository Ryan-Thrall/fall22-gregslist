import { appState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function _drawCars() {
  let template = ''
  console.log(appState.cars)
  appState.cars.forEach(car => template += car.CarCardTemplate)
  // TODO trigger bad set
  setHTML('listings', template)
}

function _showCarsButton() {
  // @ts-ignore
  document.getElementById('addCarButton').className = "btn btn-outline-light";
  // @ts-ignore
  document.getElementById('addJobButton').className = "btn btn-outline-light d-none"
  console.log("SHOW THE BUTTON!!!")
}

export class CarsController {
  constructor() {
    _drawCars() // NOTE draw cars on page load do not do this for houses or jobs

    // NOTE Sets up a listener to be triggered each time a change occurs to the cars array causing the page to re-render each of the cars 
    appState.on('cars', _drawCars)
  }


  showCars() {
    _drawCars()
    _showCarsButton()
  }


  // test() {
  //   // NOTE NEVER DO THIS TESTING ONLY

  //   let testCar = new Car({ make: 'Test', model: 'Car', imgUrl: 'https://conti-engineering.com/wp-content/uploads/2020/05/VirtualVehicleTest_Beitrag.jpg', year: 2000, price: 2000, description: 'test only' })

  //   // NEVER manipulate data directly from a controller its a big NO NO
  //   appState.cars = [testCar, ...appState.cars]

  // }


  addCar() {
    try {
      // REVIEW FORM SUBMISSION EXAMPLE 
      // THE THREE THINGS WE DO WITH EVERY FORM SUBMISSION!!!!
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)

      carsService.addCar(formData)

      // @ts-ignore
      form.reset()

    } catch (error) {
      console.error('addCar', error)
    }
  }



}
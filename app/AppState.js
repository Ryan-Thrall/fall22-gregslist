import { Car } from "./Models/Car.js"
import { Job } from "./Models/Job.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)

  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', Car)

  /** @type {import('./Models/Job').Job[]} */
  jobs = [
    new Job({ company: "Restaurnat", jobTitle: "Food Maker", hours: 24, rate: 2, description: "Making Food", imgURL: "http://thiscatdoesnotexist.com" }),
    new Job({ company: "Ducks Inc.", jobTitle: "Duck Maker", hours: 140, rate: 500, description: "DUCKS!!!", imgURL: "http://thiscatdoesnotexist.com" })
  ]


}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

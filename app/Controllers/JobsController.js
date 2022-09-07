import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"

function _drawJobs() {
  let template = ''
  console.log(appState.jobs)
  appState.jobs.forEach(job => {
    template += job.JobCardTemplate
    // console.log(job)
  })
  // console.log(appState.jobs)

  setHTML('listings', template)
}

function _showJobsButton() {
  // @ts-ignore
  document.getElementById('addJobButton').className = "btn btn-outline-light";
  // @ts-ignore
  document.getElementById('addCarButton').className = "btn btn-outline-light d-none"
  console.log("SHOW THE BUTTON!!!")
}

export class JobsController {
  constructor() {
    console.log('the jobs controller')

  }

  showJobs() {
    console.log("showing jobs")
    _drawJobs()
    _showJobsButton()
  }
}
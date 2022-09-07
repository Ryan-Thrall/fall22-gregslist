import { generateId } from "../Utils/generateId.js";

export class Job {
  /**
   * The data needed to make a job
   * @param {{company: string, jobTitle: string, hours: number, rate: number, description: string, imgURL: string, id?: string}} data
   */

  constructor(data) {
    this.company = data.company;
    this.jobTitle = data.jobTitle;
    this.hours = data.hours;
    this.rate = data.rate;
    this.description = data.description;
    this.imgURL = data.imgURL;
    this.id = data.id || generateId();
  }

  get JobCardTemplate() {
    return /*html*/ `
        <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${this.imgURL}" alt="${this.jobTitle}" class="img-fluid">
        <div class="card-body">
          <h5 class="text-uppercase">
            ${this.company} | ${this.jobTitle}
          </h5>
          <p>
            <strong>$ ${this.rate} ph</strong>
          </p>
          <p>Hours: ${this.hours}</p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
}
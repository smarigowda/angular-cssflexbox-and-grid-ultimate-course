import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  portfolioItems;
  constructor() {
    this.portfolioItems = [
      {
        id: 1,
        projectname: "WebSite",
        desc: "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      },
      {
        id: 2,
        projectname: "App",
        desc: "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      },
      {
        id: 3,
        projectname: "App",
        desc: "Pellentesque quis mi et sem faucibus feugiat quis et dui. Pellentesque consectetur magna vitae risus rhoncus volutpat non quis ipsum. Fusce eu maximus turpis, id rutrum dolor. Vivamus est ex, malesuada at leo vitae, eleifend rhoncus velit."
      },
      {
        id: 4,
        projectname: "Web App",
        desc: "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      },
      {
        id: 5,
        projectname: "App",
        desc: "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      },
      {
        id: 6,
        projectname: "App",
        desc: "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      },
      {
        id: 7,
        projectname: "App",
        desc: "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      },
      {
        id: 8,
        projectname: "App",
        desc: "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      }
    ]
  }

}

import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions= {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Yearly Product management evaluation 2022-2023',
          align: 'center'
      },
      subtitle: {
          text: 'ProductBoard',
          align: 'center'
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec']
      },
      yAxis: {
          title: {
              text: 'Sales'
          },
          
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Electronics',
          data: [37.8, 29.3, 30.8, 36.8, 40.5, 35.3, 34.9, 43.6, 45.7, 35.9, 32.7, 17.5
          ]
      }, {
          name: 'Appliances',
          data: [39.9, 29.9, 26.7, 38.1, 39.3, 30.2, 27.5, 36.7, 42.7, 31.4, 27.5, 23.5
          ]
      }, {
          name: 'SmartPhones',
          data: [13.2, 15.6, 13.1, 11.3, 12.2, 13.1, 12.4, 16.9, 12.9,14.5, 17.2,12.4]
      },{
        name: 'Household furniture',
        data: [19.9, 9.9, 6.7, 3.1, 9.3, 3.2, 7.5, 6.7, 2.7, 3.4, 7.5,6.6
        ]
    }]
  }
  HC_exporting(Highcharts);
  }

}

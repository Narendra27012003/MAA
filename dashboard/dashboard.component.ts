import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HighchartsChartModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public Highcharts: typeof Highcharts = Highcharts;

  // Analysis Line Chart Options
  public analysisChartOptions: Highcharts.Options = {};

  // My Daily Tasks Pie Chart Options
  public dailyTasksOptions: Highcharts.Options = {};

  // Shipment Statistics Pie Chart Options (to be shown in Row 1, Column 1)
  public shipmentStatsOptions: Highcharts.Options = {};

  ngOnInit(): void {
    // Initialize Analysis Line Chart Options
    this.analysisChartOptions = {
      chart: { type: 'line' },
      title: { text: 'Analysis' },
      xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
      yAxis: { title: { text: 'Value' } },
      series: [
        {
          name: 'Active Orders',
          type: 'line',
          data: [29, 71, 106, 129, 144]
        },
        {
          name: 'Inactive Orders',
          type: 'line',
          data: [15, 35, 78, 45, 100]
        }
      ]
    };

    // Initialize My Daily Tasks Pie Chart Options (e.g., Online = 40, Offline = 32)
    this.dailyTasksOptions = {
      chart: { type: 'pie' },
      title: { text: 'My Daily Tasks' },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            format: '{point.name}: {point.y}'
          }
        }
      },
      series: [{
        name: 'Tasks',
        type: 'pie',
        data: [
          { name: 'Online', y: 40 },
          { name: 'Offline', y: 32 }
        ]
      }]
    };

    // Initialize Shipment Statistics Pie Chart Options (e.g., Completed = 600, In-Transit = 200, Pending = 100, Failed = 60)
    this.shipmentStatsOptions = {
      chart: { type: 'pie' },
      title: { text: 'Shipment Statistics' },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            format: '{point.name}: {point.y}'
          }
        }
      },
      series: [{
        name: 'Shipments',
        type: 'pie',
        data: [
          { name: 'Completed', y: 600 },
          { name: 'In-Transit', y: 200 },
          { name: 'Pending', y: 100 },
          { name: 'Failed', y: 60 }
        ]
      }]
    };
  }
}

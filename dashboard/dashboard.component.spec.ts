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
  // Reuse the same Highcharts reference
  Highcharts = Highcharts;

  // "Analysis" chart options (line chart) 
  analysisChartOptions: Highcharts.Options = {};

  // Pie chart for My Daily Tasks
  dailyTasksOptions: Highcharts.Options = {};

  // Pie chart for Shipment Statistics
  shipmentStatsOptions: Highcharts.Options = {};

  ngOnInit(): void {
    // 1) Analysis: line chart
    this.analysisChartOptions = {
      chart: { type: 'line' },
      title: { text: '' }, // We'll label it in HTML
      xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
      yAxis: { title: { text: 'Value' } },
      series: [{
        name: 'Active Orders',
        type: 'line',
        data: [29, 71, 106, 129, 144]
      },
      {
        name: 'Inactive Orders',
        type: 'line',
        data: [15, 35, 78, 45, 100]
      }]
    };

    // 2) My Daily Tasks: circular chart (pie)
    // "Online" vs "Offline" tasks total 72 (e.g. 40 online, 32 offline)
    this.dailyTasksOptions = {
      chart: { type: 'pie' },
      title: { text: '' }, // We'll label in HTML
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            format: '{point.name}: {point.y}'
          },
          innerSize: '0%' // if you want a donut, set to '50%'
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

    // 3) Shipment Statistics: circular chart (pie)
    // total: 960 => Completed, In-Transit, Pending, Failed
    // e.g. Completed=600, In-Transit=200, Pending=100, Failed=60
    this.shipmentStatsOptions = {
      chart: { type: 'pie' },
      title: { text: '' },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            format: '{point.name}: {point.y}'
          },
          innerSize: '0%'
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

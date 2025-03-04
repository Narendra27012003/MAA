import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BlogItem {
  imageUrl: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-food-safety-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-safety-blog.component.html',
  styleUrls: ['./food-safety-blog.component.css']
})
export class FoodSafetyBlogComponent implements OnInit {
  blogs: BlogItem[] = [
    {
      imageUrl: 'https://sfast.ae/wp-content/uploads/elementor/thumbs/Basic-Food-Safety-qs9lksa7kdcwjkmwpxm6u1gnt345fggu4ai8eppjsg.jpg',
      title: 'Basic Food Safety',
      description: 'Learn the fundamentals of maintaining food safety in your establishment.'
    },
    {
      imageUrl: 'https://www.sesotec.com/sites/593fc2aac25e5b0640a20ff8/content_entry5996a921c25e5b2c7874b55f/5e2ace13d1468d59c7c8d814/files/food-safety-lebensmittel-lupe.jpg',
      title: 'Food Safety Inspection',
      description: 'Insights into the inspection process and best practices.'
    },
    {
      imageUrl: 'https://foodsafetystandard.in/wp-content/uploads/2024/10/Food-Safety-Hygiene.png',
      title: 'Hygiene Standards',
      description: 'Implementing and maintaining high hygiene standards for food safety.'
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1184468483/vector/food-safety-word-concepts-banner.jpg?s=2048x2048&w=is&k=20&c=Qv1F6SVeuEPDyB49-OdA-cIXiYxKR8kZ-Ir65uB_t1A=',
      title: 'Food Safety Concepts',
      description: 'A comprehensive guide to essential food safety concepts.'
    }
  ];

  // Additional info section (random text)
  additionalInfo: string = 'Maintaining food safety is not just about compliance; it is about protecting your customers and building trust. Our blogs offer insights, best practices, and the latest trends in food safety management to help you stay ahead of the curve.';

  constructor() {}

  ngOnInit(): void {}
}

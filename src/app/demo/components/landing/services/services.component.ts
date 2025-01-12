import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  sidebarVisible = false;
  selection = 'Project Management'
//assets/demo/images/landing/VKGSnap.jpg
//assets/demo/images/landing/YB.jpeg
//assets/demo/images/landing/NPSnap.jpg
//assets/demo/images/landing/AK1.jpg

//Dr.V.K.Garg, Dr.Yatin Bhatia
  
  menuOptions = [
    {service: 'Project Management', trainers: [
      {name: 'Dr.V.K.Garg', certification: 'Senior Management Expert & PMP® Master Trainer with 48+ Years of Global Project Leadership', image: 'assets/demo/images/landing/VKGSnap.jpg'}, 
      {name: 'Dr.Yatin Bhatia', certification: 'Global Project Management Leader | PMP® & Six Sigma Black Belt Trainer | Expert in Transformational Leadership', image: 'assets/demo/images/landing/YB.jpeg'}
    ]},
    {service: 'Business Analysis', trainers: [
      {name: 'Dr.V.K.Garg', certification: 'Senior Management Expert & PMP® Master Trainer with 48+ Years of Global Project Leadership', image: 'assets/demo/images/landing/VKGSnap.jpg'}, 
      {name: 'Dr.Yatin Bhatia', certification: 'Global Project Management Leader | PMP® & Six Sigma Black Belt Trainer | Expert in Transformational Leadership', image: 'assets/demo/images/landing/YB.jpeg'}
    ]},
    {service: 'Design Thinking', trainers: [
      {name: 'Dr. Anuj Kulkarni', certification: 'Leadership & Entrepreneurship Expert | Certified Agile, PMP®, & Human-Centered Design Practitioner', image: 'assets/demo/images/landing/AK1.jpg'}, 
      {name: 'Dr.Yatin Bhatia', certification: 'Global Project Management Leader | PMP® & Six Sigma Black Belt Trainer | Expert in Transformational Leadership', image: 'assets/demo/images/landing/YB.jpeg'}
    ]},
    {service: 'Six Sigma Black Green Belt & Black Belt', trainers: [
      {name: 'Mr. Neelesh Pandey', certification: 'Experienced Project Management & Product Strategy Leader | PMP® & Six Sigma Black Belt', image: 'assets/demo/images/landing/NPSnap.jpg'}, 
      {name: 'Dr.Yatin Bhatia', certification: 'Global Project Management Leader | PMP® & Six Sigma Black Belt Trainer | Expert in Transformational Leadership', image: 'assets/demo/images/landing/YB.jpeg'}
    ]},
    {service: 'PMP Certification', trainers: [
      {name: 'Dr.V.K.Garg', certification: 'Senior Management Expert & PMP® Master Trainer with 48+ Years of Global Project Leadership', image: 'assets/demo/images/landing/VKGSnap.jpg'}, 
      {name: 'Dr.Yatin Bhatia', certification: 'Global Project Management Leader | PMP® & Six Sigma Black Belt Trainer | Expert in Transformational Leadership', image: 'assets/demo/images/landing/YB.jpeg'}
    ]},
    {service: 'CAPM Certification', trainers: [
      {name: 'Dr.V.K.Garg', certification: 'Senior Management Expert & PMP® Master Trainer with 48+ Years of Global Project Leadership', image: 'assets/demo/images/landing/VKGSnap.jpg'}, 
      {name: 'Dr.Yatin Bhatia', certification: 'Global Project Management Leader | PMP® & Six Sigma Black Belt Trainer | Expert in Transformational Leadership', image: 'assets/demo/images/landing/YB.jpeg'}
    ]},
    {service: 'Webinars', trainers: [
      {name: 'Dr. Anuj Kulkarni', certification: 'Leadership & Entrepreneurship Expert | Certified Agile, PMP®, & Human-Centered Design Practitioner', image: 'assets/demo/images/landing/AK1.jpg'}, 
      {name: 'Mr. Neelesh Pandey', certification: 'Experienced Project Management & Product Strategy Leader | PMP® & Six Sigma Black Belt', image: 'assets/demo/images/landing/NPSnap.jpg'}, 
    ]},
    {service: 'Workshops', trainers: [
      {name: 'Dr.V.K.Garg', certification: 'Senior Management Expert & PMP® Master Trainer with 48+ Years of Global Project Leadership', image: 'assets/demo/images/landing/VKGSnap.jpg'}, 
      {name: 'Dr.Yatin Bhatia', certification: 'Global Project Management Leader | PMP® & Six Sigma Black Belt Trainer | Expert in Transformational Leadership', image: 'assets/demo/images/landing/YB.jpeg'}
    ]},
  ]

}

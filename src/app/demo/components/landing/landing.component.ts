import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{
    currentYear: string;
    tab = 0;
    email!: FormControl;
    name!: FormControl;
    message!: FormControl;
    phoneNumber!: FormControl;
    enquireForm!: FormGroup;
    disableForm = false;
    tabNumber = 0;
    catagory = 0; // 0 - Project Management, 1 - Six Sigma, 2 - Business Analysis, 3 - Design Thinking
    slideIndex = 1;
    visibleCourse = false;
    visibleCert = false;
    visibleWorkshop = false;
    constructor(public layoutService: LayoutService, public router: Router) { 
        this.currentYear = new Date().getFullYear().toString();
    }

    ngOnInit(): void {
        this.createForm();
        this.showSlides(this.slideIndex)

        setInterval(() => {
          this.slideIndex = this.slideIndex + 1;
          if (this.slideIndex >= 4) {
            this.slideIndex = 1
          }
          this.showSlides(this.slideIndex)
        }, 4000)
    }
 
    scrollToAnchor(location: string, wait: number): void {
        const element = document.querySelector('#' + location)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
          }, wait)
        }
      }

      createForm() {
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.name = new FormControl('', [Validators.required]);
        this.phoneNumber = new FormControl('', [Validators.required]);
        this.message = new FormControl('', [Validators.required]);
        this.enquireForm = new FormGroup({
          email: this.email,
          name: this.name,
          phoneNumber: this.phoneNumber,
          message: this.message,
        });
      }

      showSlides(n) {
        let i;
        let dots = document.getElementsByClassName("dot");
       
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[this.slideIndex-1].className += " active";
      }

      submitForm() {
        console.log(1)
      }
}

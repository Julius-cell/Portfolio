import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'pg-home',
  templateUrl: './home.component.html',
  imports: [ReactiveFormsModule],
  standalone: true,
  styles: [],
})
export class HomeComponent {
  pdfUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/cv-english.pdf'
    );
  }

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
  });

  sendMessage(): void {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

  navigateTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}

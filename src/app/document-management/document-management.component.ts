import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../api/document.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-document-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-management.component.html',
  styleUrl: './document-management.component.css'
})
export class DocumentManagementComponent implements OnInit {
  documents: any[] = [];
  selectedFile: File | null = null;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.documentService.getDocuments().subscribe({
      next: (documents) => (this.documents = documents),
      error: (error) => console.error('Error loading documents', error)
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadDocument(): void {
    if (this.selectedFile) {
      this.documentService.uploadDocument(this.selectedFile).subscribe({
        next: () => this.loadDocuments(),
        error: (error) => console.error('Error uploading document', error)
      });
    }
  }
}
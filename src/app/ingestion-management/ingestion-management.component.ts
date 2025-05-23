import { Component, OnInit } from '@angular/core';
import { IngestionService } from '../api/ingestion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingestion-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingestion-management.component.html',
  styleUrl: './ingestion-management.component.css'
})
export class IngestionManagementComponent implements OnInit {
  ingestions: any[] = [];

  constructor(private ingestionService: IngestionService) {}

  ngOnInit(): void {
    this.loadIngestions();
  }

  loadIngestions(): void {
    this.ingestionService.getIngestions().subscribe({
      next: (ingestions) => (this.ingestions = ingestions),
      error: (error) => console.error('Error loading ingestions', error)
    });
  }

  triggerIngestion(documentId: number): void {
    this.ingestionService.triggerIngestion(documentId).subscribe({
      next: () => this.loadIngestions(),
      error: (error) => console.error('Error triggering ingestion', error)
    });
  }
}

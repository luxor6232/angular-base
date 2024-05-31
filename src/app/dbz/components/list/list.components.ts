import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dbz-list',
  // standalone: true,
  templateUrl: './list.components.html',
  styleUrl: './list.components.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { }

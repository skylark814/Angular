import { TestBed } from '@angular/core/testing';

import { GameItemService } from './game-item.service';

describe('GameItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameItemService = TestBed.get(GameItemService);
    expect(service).toBeTruthy();
  });
});

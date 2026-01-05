import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideRouter, RouterLink, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <a routerLink="/list">List</a>
    <router-outlet></router-outlet>
  `,
})
class TestHostComponent {}

@Component({
  standalone: true,
  template: '<p>dummy</p>',
})
class DummyComponent {}

describe('Router navigation', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [provideRouter([{ path: 'list', component: DummyComponent }])],
    }).compileComponents();
  });

  it('should navigate to /list when link is clicked', async () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const anchor = fixture.debugElement.query(By.css('a')).nativeElement;
    anchor.click();

    await fixture.whenStable();

    const location = TestBed.inject(Location);
    expect(location.path()).toBe('/list');
  });
});

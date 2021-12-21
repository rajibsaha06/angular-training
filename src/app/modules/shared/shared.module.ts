import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { NoSpecialCharactersDirective } from './directives/no-special-characters.directive';

@NgModule({
  declarations: [
    LogoComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ShortenTextPipe,
    NoSpecialCharactersDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ShortenTextPipe,
    NoSpecialCharactersDirective,
  ],
})
export class SharedModule {}

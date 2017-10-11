import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms'; //для работы ngModel
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { ShoppingListService } from './shopping-list/shopping-list.service';
// import { RecipeService } from './recipes/recipe.service';
// import { DataStorageService } from './shared/data-storage.service';
// import { AuthService } from './auth/auth.service';
// import { AuthGuard } from './auth/auth-guard.service';
// import { RecipesModule } from './recipes/recipes.module'; will be Lazy Loading
import { SharedModule } from './shared/shared.module';
import { ShoppingListsModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
// import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
    // HeaderComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    // RecipesModule,
    SharedModule,
    ShoppingListsModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
